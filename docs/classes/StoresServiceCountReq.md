[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoresServiceCountReq

# Class: StoresServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.StoresServiceCountReq

## Hierarchy

- `Message`\<[`StoresServiceCountReq`](StoresServiceCountReq.md)\>

  ↳ **`StoresServiceCountReq`**

## Table of contents

### Constructors

- [constructor](StoresServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](StoresServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](StoresServiceCountReq.md#approvedonend)
- [approvedOnStart](StoresServiceCountReq.md#approvedonstart)
- [approverRoleId](StoresServiceCountReq.md#approverroleid)
- [code](StoresServiceCountReq.md#code)
- [creationTimestampEnd](StoresServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](StoresServiceCountReq.md#creationtimestampstart)
- [entityUuid](StoresServiceCountReq.md#entityuuid)
- [isActive](StoresServiceCountReq.md#isactive)
- [locationId](StoresServiceCountReq.md#locationid)
- [modificationTimestampEnd](StoresServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](StoresServiceCountReq.md#modificationtimestampstart)
- [name](StoresServiceCountReq.md#name)
- [status](StoresServiceCountReq.md#status)
- [fields](StoresServiceCountReq.md#fields)
- [runtime](StoresServiceCountReq.md#runtime)
- [typeName](StoresServiceCountReq.md#typename)

### Methods

- [clone](StoresServiceCountReq.md#clone)
- [equals](StoresServiceCountReq.md#equals)
- [fromBinary](StoresServiceCountReq.md#frombinary)
- [fromJson](StoresServiceCountReq.md#fromjson)
- [fromJsonString](StoresServiceCountReq.md#fromjsonstring)
- [getType](StoresServiceCountReq.md#gettype)
- [toBinary](StoresServiceCountReq.md#tobinary)
- [toJSON](StoresServiceCountReq.md#tojson)
- [toJson](StoresServiceCountReq.md#tojson-1)
- [toJsonString](StoresServiceCountReq.md#tojsonstring)
- [equals](StoresServiceCountReq.md#equals-1)
- [fromBinary](StoresServiceCountReq.md#frombinary-1)
- [fromJson](StoresServiceCountReq.md#fromjson-1)
- [fromJsonString](StoresServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoresServiceCountReq**(`data?`): [`StoresServiceCountReq`](StoresServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoresServiceCountReq`](StoresServiceCountReq.md)\> |

#### Returns

[`StoresServiceCountReq`](StoresServiceCountReq.md)

#### Overrides

Message\&lt;StoresServiceCountReq\&gt;.constructor

#### Defined in

[src/stores.scailo_pb.ts:1146](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1146)

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

[src/stores.scailo_pb.ts:1107](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1107)

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

[src/stores.scailo_pb.ts:1091](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1091)

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

[src/stores.scailo_pb.ts:1075](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1075)

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

[src/stores.scailo_pb.ts:1123](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1123)

___

### code

• **code**: `string` = `""`

The unique code by which the store is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/stores.scailo_pb.ts:1137](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1137)

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

[src/stores.scailo_pb.ts:999](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L999)

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

[src/stores.scailo_pb.ts:983](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L983)

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

[src/stores.scailo_pb.ts:1047](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1047)

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

[src/stores.scailo_pb.ts:967](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L967)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the associated location

**`Generated`**

from field: uint64 location_id = 22;

#### Defined in

[src/stores.scailo_pb.ts:1144](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1144)

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

[src/stores.scailo_pb.ts:1031](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1031)

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

[src/stores.scailo_pb.ts:1015](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1015)

___

### name

• **name**: `string` = `""`

The name of the store

**`Generated`**

from field: string name = 20;

#### Defined in

[src/stores.scailo_pb.ts:1130](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1130)

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

[src/stores.scailo_pb.ts:1059](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1059)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stores.scailo_pb.ts:1153](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1153)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stores.scailo_pb.ts:1151](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1151)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoresServiceCountReq"``

#### Defined in

[src/stores.scailo_pb.ts:1152](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1152)

## Methods

### clone

▸ **clone**(): [`StoresServiceCountReq`](StoresServiceCountReq.md)

Create a deep copy.

#### Returns

[`StoresServiceCountReq`](StoresServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StoresServiceCountReq`](StoresServiceCountReq.md) \| `PlainMessage`\<[`StoresServiceCountReq`](StoresServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoresServiceCountReq`](StoresServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoresServiceCountReq`](StoresServiceCountReq.md)\>

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
| `a` | `undefined` \| [`StoresServiceCountReq`](StoresServiceCountReq.md) \| `PlainMessage`\<[`StoresServiceCountReq`](StoresServiceCountReq.md)\> |
| `b` | `undefined` \| [`StoresServiceCountReq`](StoresServiceCountReq.md) \| `PlainMessage`\<[`StoresServiceCountReq`](StoresServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stores.scailo_pb.ts:1182](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1182)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoresServiceCountReq`](StoresServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoresServiceCountReq`](StoresServiceCountReq.md)

#### Defined in

[src/stores.scailo_pb.ts:1170](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1170)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoresServiceCountReq`](StoresServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServiceCountReq`](StoresServiceCountReq.md)

#### Defined in

[src/stores.scailo_pb.ts:1174](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1174)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoresServiceCountReq`](StoresServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoresServiceCountReq`](StoresServiceCountReq.md)

#### Defined in

[src/stores.scailo_pb.ts:1178](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/stores.scailo_pb.ts#L1178)
