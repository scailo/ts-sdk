[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UnitsOfMaterialsServiceCountReq

# Class: UnitsOfMaterialsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.UnitsOfMaterialsServiceCountReq

## Hierarchy

- `Message`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\>

  ↳ **`UnitsOfMaterialsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](UnitsOfMaterialsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](UnitsOfMaterialsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](UnitsOfMaterialsServiceCountReq.md#approvedonend)
- [approvedOnStart](UnitsOfMaterialsServiceCountReq.md#approvedonstart)
- [approverRoleId](UnitsOfMaterialsServiceCountReq.md#approverroleid)
- [creationTimestampEnd](UnitsOfMaterialsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](UnitsOfMaterialsServiceCountReq.md#creationtimestampstart)
- [entityUuid](UnitsOfMaterialsServiceCountReq.md#entityuuid)
- [isActive](UnitsOfMaterialsServiceCountReq.md#isactive)
- [modificationTimestampEnd](UnitsOfMaterialsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](UnitsOfMaterialsServiceCountReq.md#modificationtimestampstart)
- [name](UnitsOfMaterialsServiceCountReq.md#name)
- [status](UnitsOfMaterialsServiceCountReq.md#status)
- [symbol](UnitsOfMaterialsServiceCountReq.md#symbol)
- [fields](UnitsOfMaterialsServiceCountReq.md#fields)
- [runtime](UnitsOfMaterialsServiceCountReq.md#runtime)
- [typeName](UnitsOfMaterialsServiceCountReq.md#typename)

### Methods

- [clone](UnitsOfMaterialsServiceCountReq.md#clone)
- [equals](UnitsOfMaterialsServiceCountReq.md#equals)
- [fromBinary](UnitsOfMaterialsServiceCountReq.md#frombinary)
- [fromJson](UnitsOfMaterialsServiceCountReq.md#fromjson)
- [fromJsonString](UnitsOfMaterialsServiceCountReq.md#fromjsonstring)
- [getType](UnitsOfMaterialsServiceCountReq.md#gettype)
- [toBinary](UnitsOfMaterialsServiceCountReq.md#tobinary)
- [toJSON](UnitsOfMaterialsServiceCountReq.md#tojson)
- [toJson](UnitsOfMaterialsServiceCountReq.md#tojson-1)
- [toJsonString](UnitsOfMaterialsServiceCountReq.md#tojsonstring)
- [equals](UnitsOfMaterialsServiceCountReq.md#equals-1)
- [fromBinary](UnitsOfMaterialsServiceCountReq.md#frombinary-1)
- [fromJson](UnitsOfMaterialsServiceCountReq.md#fromjson-1)
- [fromJsonString](UnitsOfMaterialsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UnitsOfMaterialsServiceCountReq**(`data?`): [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\> |

#### Returns

[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Overrides

Message\&lt;UnitsOfMaterialsServiceCountReq\&gt;.constructor

#### Defined in

[src/units_of_materials.scailo_pb.ts:1062](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L1062)

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

[src/units_of_materials.scailo_pb.ts:1030](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L1030)

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

[src/units_of_materials.scailo_pb.ts:1014](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L1014)

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

[src/units_of_materials.scailo_pb.ts:998](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L998)

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

[src/units_of_materials.scailo_pb.ts:1046](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L1046)

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

[src/units_of_materials.scailo_pb.ts:922](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L922)

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

[src/units_of_materials.scailo_pb.ts:906](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L906)

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

[src/units_of_materials.scailo_pb.ts:970](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L970)

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

[src/units_of_materials.scailo_pb.ts:890](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L890)

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

[src/units_of_materials.scailo_pb.ts:954](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L954)

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

[src/units_of_materials.scailo_pb.ts:938](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L938)

___

### name

• **name**: `string` = `""`

The name of the unit of material

**`Generated`**

from field: string name = 20;

#### Defined in

[src/units_of_materials.scailo_pb.ts:1053](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L1053)

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

[src/units_of_materials.scailo_pb.ts:982](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L982)

___

### symbol

• **symbol**: `string` = `""`

The unique symbol by which the unit of material is classified

**`Generated`**

from field: string symbol = 21;

#### Defined in

[src/units_of_materials.scailo_pb.ts:1060](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L1060)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/units_of_materials.scailo_pb.ts:1069](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L1069)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/units_of_materials.scailo_pb.ts:1067](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L1067)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UnitsOfMaterialsServiceCountReq"``

#### Defined in

[src/units_of_materials.scailo_pb.ts:1068](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L1068)

## Methods

### clone

▸ **clone**(): [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

Create a deep copy.

#### Returns

[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md) \| `PlainMessage`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md) \| `PlainMessage`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\> |
| `b` | `undefined` \| [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md) \| `PlainMessage`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/units_of_materials.scailo_pb.ts:1097](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L1097)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Defined in

[src/units_of_materials.scailo_pb.ts:1085](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L1085)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Defined in

[src/units_of_materials.scailo_pb.ts:1089](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L1089)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Defined in

[src/units_of_materials.scailo_pb.ts:1093](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/units_of_materials.scailo_pb.ts#L1093)
