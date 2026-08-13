[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / RolesServiceFilterReq

# Class: RolesServiceFilterReq

Advanced filter request for searching and paginating roles using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.RolesServiceFilterReq

## Hierarchy

- `Message`\<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\>

  ↳ **`RolesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](RolesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](RolesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](RolesServiceFilterReq.md#approvedonend)
- [approvedOnStart](RolesServiceFilterReq.md#approvedonstart)
- [approverRoleId](RolesServiceFilterReq.md#approverroleid)
- [code](RolesServiceFilterReq.md#code)
- [completedOnEnd](RolesServiceFilterReq.md#completedonend)
- [completedOnStart](RolesServiceFilterReq.md#completedonstart)
- [count](RolesServiceFilterReq.md#count)
- [creationTimestampEnd](RolesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](RolesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](RolesServiceFilterReq.md#entityuuid)
- [isActive](RolesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](RolesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](RolesServiceFilterReq.md#modificationtimestampstart)
- [name](RolesServiceFilterReq.md#name)
- [offset](RolesServiceFilterReq.md#offset)
- [sortKey](RolesServiceFilterReq.md#sortkey)
- [sortOrder](RolesServiceFilterReq.md#sortorder)
- [status](RolesServiceFilterReq.md#status)
- [fields](RolesServiceFilterReq.md#fields)
- [runtime](RolesServiceFilterReq.md#runtime)
- [typeName](RolesServiceFilterReq.md#typename)

### Methods

- [clone](RolesServiceFilterReq.md#clone)
- [equals](RolesServiceFilterReq.md#equals)
- [fromBinary](RolesServiceFilterReq.md#frombinary)
- [fromJson](RolesServiceFilterReq.md#fromjson)
- [fromJsonString](RolesServiceFilterReq.md#fromjsonstring)
- [getType](RolesServiceFilterReq.md#gettype)
- [toBinary](RolesServiceFilterReq.md#tobinary)
- [toJSON](RolesServiceFilterReq.md#tojson)
- [toJson](RolesServiceFilterReq.md#tojson-1)
- [toJsonString](RolesServiceFilterReq.md#tojsonstring)
- [equals](RolesServiceFilterReq.md#equals-1)
- [fromBinary](RolesServiceFilterReq.md#frombinary-1)
- [fromJson](RolesServiceFilterReq.md#fromjson-1)
- [fromJsonString](RolesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolesServiceFilterReq**(`data?`): [`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\> |

#### Returns

[`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Overrides

Message\&lt;RolesServiceFilterReq\&gt;.constructor

#### Defined in

[src/roles.scailo_pb.ts:1463](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1463)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_by_user_id = 13;

#### Defined in

[src/roles.scailo_pb.ts:1381](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1381)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_on_end = 12;

#### Defined in

[src/roles.scailo_pb.ts:1365](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1365)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_on_start = 11;

#### Defined in

[src/roles.scailo_pb.ts:1349](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1349)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approver_role_id = 14;

#### Defined in

[src/roles.scailo_pb.ts:1397](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1397)

___

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique code or system-level alphanumeric token used to evaluate permissions programmatically within backend middleware.

**`Example`**

```ts
"ROLE_SR_DOC_AUDITOR"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 21;

#### Defined in

[src/roles.scailo_pb.ts:1461](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1461)

___

### completedOnEnd

• `Optional` **completedOnEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records completed ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 completed_on_end = 16;

#### Defined in

[src/roles.scailo_pb.ts:1429](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1429)

___

### completedOnStart

• `Optional` **completedOnStart**: `bigint`

**`Optional`**

**`Description`**

Filter records completed ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 completed_on_start = 15;

#### Defined in

[src/roles.scailo_pb.ts:1413](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1413)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/roles.scailo_pb.ts:1203](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1203)

___

### creationTimestampEnd

• `Optional` **creationTimestampEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 creation_timestamp_end = 102;

#### Defined in

[src/roles.scailo_pb.ts:1273](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1273)

___

### creationTimestampStart

• `Optional` **creationTimestampStart**: `bigint`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 creation_timestamp_start = 101;

#### Defined in

[src/roles.scailo_pb.ts:1257](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1257)

___

### entityUuid

• `Optional` **entityUuid**: `string`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: optional string entity_uuid = 8;

#### Defined in

[src/roles.scailo_pb.ts:1321](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1321)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/roles.scailo_pb.ts:1187](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1187)

___

### modificationTimestampEnd

• `Optional` **modificationTimestampEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 modification_timestamp_end = 104;

#### Defined in

[src/roles.scailo_pb.ts:1305](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1305)

___

### modificationTimestampStart

• `Optional` **modificationTimestampStart**: `bigint`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 modification_timestamp_start = 103;

#### Defined in

[src/roles.scailo_pb.ts:1289](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1289)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official, displayable name of the security role.

**`Example`**

```ts
"Senior Document Auditor"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 20;

#### Defined in

[src/roles.scailo_pb.ts:1445](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1445)

___

### offset

• `Optional` **offset**: `bigint`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 offset = 3;

#### Defined in

[src/roles.scailo_pb.ts:1219](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1219)

___

### sortKey

• `Optional` **sortKey**: [`ROLE_SORT_KEY`](../enums/ROLE_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.ROLE_SORT_KEY sort_key = 5;

#### Defined in

[src/roles.scailo_pb.ts:1241](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1241)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/roles.scailo_pb.ts:1231](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1231)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/roles.scailo_pb.ts:1333](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1333)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles.scailo_pb.ts:1470](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1470)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles.scailo_pb.ts:1468](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1468)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.RolesServiceFilterReq"``

#### Defined in

[src/roles.scailo_pb.ts:1469](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1469)

## Methods

### clone

▸ **clone**(): [`RolesServiceFilterReq`](RolesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`RolesServiceFilterReq`](RolesServiceFilterReq.md) \| `PlainMessage`\<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`RolesServiceFilterReq`](RolesServiceFilterReq.md) \| `PlainMessage`\<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`RolesServiceFilterReq`](RolesServiceFilterReq.md) \| `PlainMessage`\<[`RolesServiceFilterReq`](RolesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles.scailo_pb.ts:1504](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1504)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Defined in

[src/roles.scailo_pb.ts:1492](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1492)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Defined in

[src/roles.scailo_pb.ts:1496](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1496)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServiceFilterReq`](RolesServiceFilterReq.md)

#### Defined in

[src/roles.scailo_pb.ts:1500](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/roles.scailo_pb.ts#L1500)
