[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesTypesServiceCountReq

# Class: LeavesTypesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.LeavesTypesServiceCountReq

## Hierarchy

- `Message`\<[`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md)\>

  ↳ **`LeavesTypesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](LeavesTypesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](LeavesTypesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](LeavesTypesServiceCountReq.md#approvedonend)
- [approvedOnStart](LeavesTypesServiceCountReq.md#approvedonstart)
- [approverRoleId](LeavesTypesServiceCountReq.md#approverroleid)
- [code](LeavesTypesServiceCountReq.md#code)
- [completedOnEnd](LeavesTypesServiceCountReq.md#completedonend)
- [completedOnStart](LeavesTypesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](LeavesTypesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](LeavesTypesServiceCountReq.md#creationtimestampstart)
- [entityUuid](LeavesTypesServiceCountReq.md#entityuuid)
- [isActive](LeavesTypesServiceCountReq.md#isactive)
- [modificationTimestampEnd](LeavesTypesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](LeavesTypesServiceCountReq.md#modificationtimestampstart)
- [name](LeavesTypesServiceCountReq.md#name)
- [status](LeavesTypesServiceCountReq.md#status)
- [fields](LeavesTypesServiceCountReq.md#fields)
- [runtime](LeavesTypesServiceCountReq.md#runtime)
- [typeName](LeavesTypesServiceCountReq.md#typename)

### Methods

- [clone](LeavesTypesServiceCountReq.md#clone)
- [equals](LeavesTypesServiceCountReq.md#equals)
- [fromBinary](LeavesTypesServiceCountReq.md#frombinary)
- [fromJson](LeavesTypesServiceCountReq.md#fromjson)
- [fromJsonString](LeavesTypesServiceCountReq.md#fromjsonstring)
- [getType](LeavesTypesServiceCountReq.md#gettype)
- [toBinary](LeavesTypesServiceCountReq.md#tobinary)
- [toJSON](LeavesTypesServiceCountReq.md#tojson)
- [toJson](LeavesTypesServiceCountReq.md#tojson-1)
- [toJsonString](LeavesTypesServiceCountReq.md#tojsonstring)
- [equals](LeavesTypesServiceCountReq.md#equals-1)
- [fromBinary](LeavesTypesServiceCountReq.md#frombinary-1)
- [fromJson](LeavesTypesServiceCountReq.md#fromjson-1)
- [fromJsonString](LeavesTypesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesTypesServiceCountReq**(`data?`): [`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md)\> |

#### Returns

[`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md)

#### Overrides

Message\&lt;LeavesTypesServiceCountReq\&gt;.constructor

#### Defined in

[src/leaves_types.scailo_pb.ts:1203](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1203)

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

[src/leaves_types.scailo_pb.ts:1139](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1139)

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

[src/leaves_types.scailo_pb.ts:1123](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1123)

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

[src/leaves_types.scailo_pb.ts:1107](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1107)

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

[src/leaves_types.scailo_pb.ts:1155](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1155)

___

### code

• **code**: `string` = `""`

The leave type code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/leaves_types.scailo_pb.ts:1201](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1201)

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

[src/leaves_types.scailo_pb.ts:1187](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1187)

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

[src/leaves_types.scailo_pb.ts:1171](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1171)

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

[src/leaves_types.scailo_pb.ts:1031](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1031)

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

[src/leaves_types.scailo_pb.ts:1015](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1015)

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

[src/leaves_types.scailo_pb.ts:1079](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1079)

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

[src/leaves_types.scailo_pb.ts:999](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L999)

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

[src/leaves_types.scailo_pb.ts:1063](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1063)

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

[src/leaves_types.scailo_pb.ts:1047](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1047)

___

### name

• **name**: `string` = `""`

The name of the leave type

**`Generated`**

from field: string name = 20;

#### Defined in

[src/leaves_types.scailo_pb.ts:1194](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1194)

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

[src/leaves_types.scailo_pb.ts:1091](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1091)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_types.scailo_pb.ts:1210](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1210)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_types.scailo_pb.ts:1208](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1208)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesTypesServiceCountReq"``

#### Defined in

[src/leaves_types.scailo_pb.ts:1209](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1209)

## Methods

### clone

▸ **clone**(): [`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md)

Create a deep copy.

#### Returns

[`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md) \| `PlainMessage`\<[`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md) \| `PlainMessage`\<[`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md)\> |
| `b` | `undefined` \| [`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md) \| `PlainMessage`\<[`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_types.scailo_pb.ts:1240](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1240)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md)

#### Defined in

[src/leaves_types.scailo_pb.ts:1228](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1228)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md)

#### Defined in

[src/leaves_types.scailo_pb.ts:1232](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1232)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceCountReq`](LeavesTypesServiceCountReq.md)

#### Defined in

[src/leaves_types.scailo_pb.ts:1236](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/leaves_types.scailo_pb.ts#L1236)
