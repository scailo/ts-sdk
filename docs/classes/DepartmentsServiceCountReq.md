[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DepartmentsServiceCountReq

# Class: DepartmentsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.DepartmentsServiceCountReq

## Hierarchy

- `Message`\<[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)\>

  ↳ **`DepartmentsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](DepartmentsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](DepartmentsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](DepartmentsServiceCountReq.md#approvedonend)
- [approvedOnStart](DepartmentsServiceCountReq.md#approvedonstart)
- [approverRoleId](DepartmentsServiceCountReq.md#approverroleid)
- [code](DepartmentsServiceCountReq.md#code)
- [completedOnEnd](DepartmentsServiceCountReq.md#completedonend)
- [completedOnStart](DepartmentsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](DepartmentsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](DepartmentsServiceCountReq.md#creationtimestampstart)
- [entityUuid](DepartmentsServiceCountReq.md#entityuuid)
- [headUserId](DepartmentsServiceCountReq.md#headuserid)
- [isActive](DepartmentsServiceCountReq.md#isactive)
- [modificationTimestampEnd](DepartmentsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](DepartmentsServiceCountReq.md#modificationtimestampstart)
- [name](DepartmentsServiceCountReq.md#name)
- [status](DepartmentsServiceCountReq.md#status)
- [fields](DepartmentsServiceCountReq.md#fields)
- [runtime](DepartmentsServiceCountReq.md#runtime)
- [typeName](DepartmentsServiceCountReq.md#typename)

### Methods

- [clone](DepartmentsServiceCountReq.md#clone)
- [equals](DepartmentsServiceCountReq.md#equals)
- [fromBinary](DepartmentsServiceCountReq.md#frombinary)
- [fromJson](DepartmentsServiceCountReq.md#fromjson)
- [fromJsonString](DepartmentsServiceCountReq.md#fromjsonstring)
- [getType](DepartmentsServiceCountReq.md#gettype)
- [toBinary](DepartmentsServiceCountReq.md#tobinary)
- [toJSON](DepartmentsServiceCountReq.md#tojson)
- [toJson](DepartmentsServiceCountReq.md#tojson-1)
- [toJsonString](DepartmentsServiceCountReq.md#tojsonstring)
- [equals](DepartmentsServiceCountReq.md#equals-1)
- [fromBinary](DepartmentsServiceCountReq.md#frombinary-1)
- [fromJson](DepartmentsServiceCountReq.md#fromjson-1)
- [fromJsonString](DepartmentsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new DepartmentsServiceCountReq**(`data?`): [`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)\> |

#### Returns

[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

#### Overrides

Message\&lt;DepartmentsServiceCountReq\&gt;.constructor

#### Defined in

[src/departments.scailo_pb.ts:1244](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1244)

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

[src/departments.scailo_pb.ts:1173](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1173)

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

[src/departments.scailo_pb.ts:1157](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1157)

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

[src/departments.scailo_pb.ts:1141](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1141)

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

[src/departments.scailo_pb.ts:1189](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1189)

___

### code

• **code**: `string` = `""`

The code of the department

**`Generated`**

from field: string code = 21;

#### Defined in

[src/departments.scailo_pb.ts:1235](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1235)

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

[src/departments.scailo_pb.ts:1221](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1221)

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

[src/departments.scailo_pb.ts:1205](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1205)

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

[src/departments.scailo_pb.ts:1065](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1065)

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

[src/departments.scailo_pb.ts:1049](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1049)

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

[src/departments.scailo_pb.ts:1113](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1113)

___

### headUserId

• **headUserId**: `bigint` = `protoInt64.zero`

The user ID of the head

**`Generated`**

from field: uint64 head_user_id = 22;

#### Defined in

[src/departments.scailo_pb.ts:1242](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1242)

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

[src/departments.scailo_pb.ts:1033](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1033)

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

[src/departments.scailo_pb.ts:1097](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1097)

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

[src/departments.scailo_pb.ts:1081](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1081)

___

### name

• **name**: `string` = `""`

The name of the department

**`Generated`**

from field: string name = 20;

#### Defined in

[src/departments.scailo_pb.ts:1228](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1228)

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

[src/departments.scailo_pb.ts:1125](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1125)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/departments.scailo_pb.ts:1251](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1251)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/departments.scailo_pb.ts:1249](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1249)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DepartmentsServiceCountReq"``

#### Defined in

[src/departments.scailo_pb.ts:1250](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1250)

## Methods

### clone

▸ **clone**(): [`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

Create a deep copy.

#### Returns

[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md) \| `PlainMessage`\<[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md) \| `PlainMessage`\<[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)\> |
| `b` | `undefined` \| [`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md) \| `PlainMessage`\<[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/departments.scailo_pb.ts:1282](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1282)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

#### Defined in

[src/departments.scailo_pb.ts:1270](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1270)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

#### Defined in

[src/departments.scailo_pb.ts:1274](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1274)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceCountReq`](DepartmentsServiceCountReq.md)

#### Defined in

[src/departments.scailo_pb.ts:1278](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L1278)
