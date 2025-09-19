[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / HolidayShiftGroup

# Class: HolidayShiftGroup

Describes the parameters that constitute a shift associated to a shift group

**`Generated`**

from message Scailo.HolidayShiftGroup

## Hierarchy

- `Message`\<[`HolidayShiftGroup`](HolidayShiftGroup.md)\>

  ↳ **`HolidayShiftGroup`**

## Table of contents

### Constructors

- [constructor](HolidayShiftGroup.md#constructor)

### Properties

- [approvalMetadata](HolidayShiftGroup.md#approvalmetadata)
- [entityUuid](HolidayShiftGroup.md#entityuuid)
- [holidayId](HolidayShiftGroup.md#holidayid)
- [metadata](HolidayShiftGroup.md#metadata)
- [needApproval](HolidayShiftGroup.md#needapproval)
- [shiftGroupId](HolidayShiftGroup.md#shiftgroupid)
- [userComment](HolidayShiftGroup.md#usercomment)
- [fields](HolidayShiftGroup.md#fields)
- [runtime](HolidayShiftGroup.md#runtime)
- [typeName](HolidayShiftGroup.md#typename)

### Methods

- [clone](HolidayShiftGroup.md#clone)
- [equals](HolidayShiftGroup.md#equals)
- [fromBinary](HolidayShiftGroup.md#frombinary)
- [fromJson](HolidayShiftGroup.md#fromjson)
- [fromJsonString](HolidayShiftGroup.md#fromjsonstring)
- [getType](HolidayShiftGroup.md#gettype)
- [toBinary](HolidayShiftGroup.md#tobinary)
- [toJSON](HolidayShiftGroup.md#tojson)
- [toJson](HolidayShiftGroup.md#tojson-1)
- [toJsonString](HolidayShiftGroup.md#tojsonstring)
- [equals](HolidayShiftGroup.md#equals-1)
- [fromBinary](HolidayShiftGroup.md#frombinary-1)
- [fromJson](HolidayShiftGroup.md#fromjson-1)
- [fromJsonString](HolidayShiftGroup.md#fromjsonstring-1)

## Constructors

### constructor

• **new HolidayShiftGroup**(`data?`): [`HolidayShiftGroup`](HolidayShiftGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`HolidayShiftGroup`](HolidayShiftGroup.md)\> |

#### Returns

[`HolidayShiftGroup`](HolidayShiftGroup.md)

#### Overrides

Message\&lt;HolidayShiftGroup\&gt;.constructor

#### Defined in

[src/holidays.scailo_pb.ts:613](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L613)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/holidays.scailo_pb.ts:583](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L583)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/holidays.scailo_pb.ts:569](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L569)

___

### holidayId

• **holidayId**: `bigint` = `protoInt64.zero`

Stores the holiday ID

**`Generated`**

from field: uint64 holiday_id = 10;

#### Defined in

[src/holidays.scailo_pb.ts:604](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L604)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this shift group

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/holidays.scailo_pb.ts:576](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L576)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/holidays.scailo_pb.ts:590](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L590)

___

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

Stores the shift group ID

**`Generated`**

from field: uint64 shift_group_id = 11;

#### Defined in

[src/holidays.scailo_pb.ts:611](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L611)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/holidays.scailo_pb.ts:597](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L597)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/holidays.scailo_pb.ts:620](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L620)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/holidays.scailo_pb.ts:618](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L618)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.HolidayShiftGroup"``

#### Defined in

[src/holidays.scailo_pb.ts:619](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L619)

## Methods

### clone

▸ **clone**(): [`HolidayShiftGroup`](HolidayShiftGroup.md)

Create a deep copy.

#### Returns

[`HolidayShiftGroup`](HolidayShiftGroup.md)

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
| `other` | `undefined` \| ``null`` \| [`HolidayShiftGroup`](HolidayShiftGroup.md) \| `PlainMessage`\<[`HolidayShiftGroup`](HolidayShiftGroup.md)\> |

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

▸ **getType**(): `MessageType`\<[`HolidayShiftGroup`](HolidayShiftGroup.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`HolidayShiftGroup`](HolidayShiftGroup.md)\>

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
| `a` | `undefined` \| [`HolidayShiftGroup`](HolidayShiftGroup.md) \| `PlainMessage`\<[`HolidayShiftGroup`](HolidayShiftGroup.md)\> |
| `b` | `undefined` \| [`HolidayShiftGroup`](HolidayShiftGroup.md) \| `PlainMessage`\<[`HolidayShiftGroup`](HolidayShiftGroup.md)\> |

#### Returns

`boolean`

#### Defined in

[src/holidays.scailo_pb.ts:642](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L642)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HolidayShiftGroup`](HolidayShiftGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`HolidayShiftGroup`](HolidayShiftGroup.md)

#### Defined in

[src/holidays.scailo_pb.ts:630](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L630)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HolidayShiftGroup`](HolidayShiftGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`HolidayShiftGroup`](HolidayShiftGroup.md)

#### Defined in

[src/holidays.scailo_pb.ts:634](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L634)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HolidayShiftGroup`](HolidayShiftGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`HolidayShiftGroup`](HolidayShiftGroup.md)

#### Defined in

[src/holidays.scailo_pb.ts:638](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L638)
