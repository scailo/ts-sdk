[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / RolesServiceCountReq

# Class: RolesServiceCountReq

Target filter request for counting role records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.RolesServiceCountReq

## Hierarchy

- `Message`\<[`RolesServiceCountReq`](RolesServiceCountReq.md)\>

  ↳ **`RolesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](RolesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](RolesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](RolesServiceCountReq.md#approvedonend)
- [approvedOnStart](RolesServiceCountReq.md#approvedonstart)
- [approverRoleId](RolesServiceCountReq.md#approverroleid)
- [code](RolesServiceCountReq.md#code)
- [completedOnEnd](RolesServiceCountReq.md#completedonend)
- [completedOnStart](RolesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](RolesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](RolesServiceCountReq.md#creationtimestampstart)
- [entityUuid](RolesServiceCountReq.md#entityuuid)
- [isActive](RolesServiceCountReq.md#isactive)
- [modificationTimestampEnd](RolesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](RolesServiceCountReq.md#modificationtimestampstart)
- [name](RolesServiceCountReq.md#name)
- [status](RolesServiceCountReq.md#status)
- [fields](RolesServiceCountReq.md#fields)
- [runtime](RolesServiceCountReq.md#runtime)
- [typeName](RolesServiceCountReq.md#typename)

### Methods

- [clone](RolesServiceCountReq.md#clone)
- [equals](RolesServiceCountReq.md#equals)
- [fromBinary](RolesServiceCountReq.md#frombinary)
- [fromJson](RolesServiceCountReq.md#fromjson)
- [fromJsonString](RolesServiceCountReq.md#fromjsonstring)
- [getType](RolesServiceCountReq.md#gettype)
- [toBinary](RolesServiceCountReq.md#tobinary)
- [toJSON](RolesServiceCountReq.md#tojson)
- [toJson](RolesServiceCountReq.md#tojson-1)
- [toJsonString](RolesServiceCountReq.md#tojsonstring)
- [equals](RolesServiceCountReq.md#equals-1)
- [fromBinary](RolesServiceCountReq.md#frombinary-1)
- [fromJson](RolesServiceCountReq.md#fromjson-1)
- [fromJsonString](RolesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolesServiceCountReq**(`data?`): [`RolesServiceCountReq`](RolesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`RolesServiceCountReq`](RolesServiceCountReq.md)\> |

#### Returns

[`RolesServiceCountReq`](RolesServiceCountReq.md)

#### Overrides

Message\&lt;RolesServiceCountReq\&gt;.constructor

#### Defined in

[src/roles.scailo_pb.ts:1754](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1754)

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

[src/roles.scailo_pb.ts:1672](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1672)

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

[src/roles.scailo_pb.ts:1656](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1656)

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

[src/roles.scailo_pb.ts:1640](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1640)

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

[src/roles.scailo_pb.ts:1688](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1688)

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

[src/roles.scailo_pb.ts:1752](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1752)

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

[src/roles.scailo_pb.ts:1720](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1720)

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

[src/roles.scailo_pb.ts:1704](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1704)

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

[src/roles.scailo_pb.ts:1564](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1564)

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

[src/roles.scailo_pb.ts:1548](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1548)

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

[src/roles.scailo_pb.ts:1612](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1612)

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

[src/roles.scailo_pb.ts:1532](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1532)

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

[src/roles.scailo_pb.ts:1596](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1596)

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

[src/roles.scailo_pb.ts:1580](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1580)

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

[src/roles.scailo_pb.ts:1736](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1736)

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

[src/roles.scailo_pb.ts:1624](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1624)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles.scailo_pb.ts:1761](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1761)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles.scailo_pb.ts:1759](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1759)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.RolesServiceCountReq"``

#### Defined in

[src/roles.scailo_pb.ts:1760](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1760)

## Methods

### clone

▸ **clone**(): [`RolesServiceCountReq`](RolesServiceCountReq.md)

Create a deep copy.

#### Returns

[`RolesServiceCountReq`](RolesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`RolesServiceCountReq`](RolesServiceCountReq.md) \| `PlainMessage`\<[`RolesServiceCountReq`](RolesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`RolesServiceCountReq`](RolesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`RolesServiceCountReq`](RolesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`RolesServiceCountReq`](RolesServiceCountReq.md) \| `PlainMessage`\<[`RolesServiceCountReq`](RolesServiceCountReq.md)\> |
| `b` | `undefined` \| [`RolesServiceCountReq`](RolesServiceCountReq.md) \| `PlainMessage`\<[`RolesServiceCountReq`](RolesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles.scailo_pb.ts:1791](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1791)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolesServiceCountReq`](RolesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`RolesServiceCountReq`](RolesServiceCountReq.md)

#### Defined in

[src/roles.scailo_pb.ts:1779](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1779)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolesServiceCountReq`](RolesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServiceCountReq`](RolesServiceCountReq.md)

#### Defined in

[src/roles.scailo_pb.ts:1783](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1783)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolesServiceCountReq`](RolesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServiceCountReq`](RolesServiceCountReq.md)

#### Defined in

[src/roles.scailo_pb.ts:1787](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/roles.scailo_pb.ts#L1787)
