[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsReplaceablesServiceCountReq

# Class: EquationsReplaceablesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.EquationsReplaceablesServiceCountReq

## Hierarchy

- `Message`\<[`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md)\>

  ↳ **`EquationsReplaceablesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](EquationsReplaceablesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](EquationsReplaceablesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](EquationsReplaceablesServiceCountReq.md#approvedonend)
- [approvedOnStart](EquationsReplaceablesServiceCountReq.md#approvedonstart)
- [approverRoleId](EquationsReplaceablesServiceCountReq.md#approverroleid)
- [completedOnEnd](EquationsReplaceablesServiceCountReq.md#completedonend)
- [completedOnStart](EquationsReplaceablesServiceCountReq.md#completedonstart)
- [constituentFamilyId](EquationsReplaceablesServiceCountReq.md#constituentfamilyid)
- [creationTimestampEnd](EquationsReplaceablesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](EquationsReplaceablesServiceCountReq.md#creationtimestampstart)
- [entityUuid](EquationsReplaceablesServiceCountReq.md#entityuuid)
- [familyId](EquationsReplaceablesServiceCountReq.md#familyid)
- [isActive](EquationsReplaceablesServiceCountReq.md#isactive)
- [modificationTimestampEnd](EquationsReplaceablesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](EquationsReplaceablesServiceCountReq.md#modificationtimestampstart)
- [name](EquationsReplaceablesServiceCountReq.md#name)
- [status](EquationsReplaceablesServiceCountReq.md#status)
- [fields](EquationsReplaceablesServiceCountReq.md#fields)
- [runtime](EquationsReplaceablesServiceCountReq.md#runtime)
- [typeName](EquationsReplaceablesServiceCountReq.md#typename)

### Methods

- [clone](EquationsReplaceablesServiceCountReq.md#clone)
- [equals](EquationsReplaceablesServiceCountReq.md#equals)
- [fromBinary](EquationsReplaceablesServiceCountReq.md#frombinary)
- [fromJson](EquationsReplaceablesServiceCountReq.md#fromjson)
- [fromJsonString](EquationsReplaceablesServiceCountReq.md#fromjsonstring)
- [getType](EquationsReplaceablesServiceCountReq.md#gettype)
- [toBinary](EquationsReplaceablesServiceCountReq.md#tobinary)
- [toJSON](EquationsReplaceablesServiceCountReq.md#tojson)
- [toJson](EquationsReplaceablesServiceCountReq.md#tojson-1)
- [toJsonString](EquationsReplaceablesServiceCountReq.md#tojsonstring)
- [equals](EquationsReplaceablesServiceCountReq.md#equals-1)
- [fromBinary](EquationsReplaceablesServiceCountReq.md#frombinary-1)
- [fromJson](EquationsReplaceablesServiceCountReq.md#fromjson-1)
- [fromJsonString](EquationsReplaceablesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsReplaceablesServiceCountReq**(`data?`): [`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md)\> |

#### Returns

[`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md)

#### Overrides

Message\&lt;EquationsReplaceablesServiceCountReq\&gt;.constructor

#### Defined in

[src/equations_replaceables.scailo_pb.ts:2011](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L2011)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

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

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:1940](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L1940)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

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

from field: uint64 approved_on_end = 12;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:1924](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L1924)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

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

from field: uint64 approved_on_start = 11;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:1908](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L1908)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

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

from field: uint64 approver_role_id = 14;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:1956](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L1956)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

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

from field: uint64 completed_on_end = 16;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:1988](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L1988)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

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

from field: uint64 completed_on_start = 15;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:1972](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L1972)

___

### constituentFamilyId

• **constituentFamilyId**: `bigint` = `protoInt64.zero`

The ID of the constituent family that is part of an equation

**`Generated`**

from field: uint64 constituent_family_id = 30;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:2009](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L2009)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

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

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:1832](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L1832)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

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

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:1816](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L1816)

___

### entityUuid

• **entityUuid**: `string` = `""`

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

from field: string entity_uuid = 8;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:1880](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L1880)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that this equation belongs to

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:2002](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L2002)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:1800](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L1800)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

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

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:1864](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L1864)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

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

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:1848](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L1848)

___

### name

• **name**: `string` = `""`

The name of the equation replaceable

**`Generated`**

from field: string name = 20;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:1995](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L1995)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:1892](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L1892)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_replaceables.scailo_pb.ts:2018](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L2018)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_replaceables.scailo_pb.ts:2016](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L2016)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsReplaceablesServiceCountReq"``

#### Defined in

[src/equations_replaceables.scailo_pb.ts:2017](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L2017)

## Methods

### clone

▸ **clone**(): [`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md)

Create a deep copy.

#### Returns

[`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md) \| `PlainMessage`\<[`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md) \| `PlainMessage`\<[`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md)\> |
| `b` | `undefined` \| [`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md) \| `PlainMessage`\<[`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_replaceables.scailo_pb.ts:2049](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L2049)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md)

#### Defined in

[src/equations_replaceables.scailo_pb.ts:2037](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L2037)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md)

#### Defined in

[src/equations_replaceables.scailo_pb.ts:2041](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L2041)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceCountReq`](EquationsReplaceablesServiceCountReq.md)

#### Defined in

[src/equations_replaceables.scailo_pb.ts:2045](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/equations_replaceables.scailo_pb.ts#L2045)
