[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsRecordsHistoryRequest

# Class: LeavesAdjustmentsRecordsHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.LeavesAdjustmentsRecordsHistoryRequest

## Hierarchy

- `Message`\<[`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md)\>

  ↳ **`LeavesAdjustmentsRecordsHistoryRequest`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsRecordsHistoryRequest.md#constructor)

### Properties

- [leaveAdjustmentId](LeavesAdjustmentsRecordsHistoryRequest.md#leaveadjustmentid)
- [leaveTypeId](LeavesAdjustmentsRecordsHistoryRequest.md#leavetypeid)
- [fields](LeavesAdjustmentsRecordsHistoryRequest.md#fields)
- [runtime](LeavesAdjustmentsRecordsHistoryRequest.md#runtime)
- [typeName](LeavesAdjustmentsRecordsHistoryRequest.md#typename)

### Methods

- [clone](LeavesAdjustmentsRecordsHistoryRequest.md#clone)
- [equals](LeavesAdjustmentsRecordsHistoryRequest.md#equals)
- [fromBinary](LeavesAdjustmentsRecordsHistoryRequest.md#frombinary)
- [fromJson](LeavesAdjustmentsRecordsHistoryRequest.md#fromjson)
- [fromJsonString](LeavesAdjustmentsRecordsHistoryRequest.md#fromjsonstring)
- [getType](LeavesAdjustmentsRecordsHistoryRequest.md#gettype)
- [toBinary](LeavesAdjustmentsRecordsHistoryRequest.md#tobinary)
- [toJSON](LeavesAdjustmentsRecordsHistoryRequest.md#tojson)
- [toJson](LeavesAdjustmentsRecordsHistoryRequest.md#tojson-1)
- [toJsonString](LeavesAdjustmentsRecordsHistoryRequest.md#tojsonstring)
- [equals](LeavesAdjustmentsRecordsHistoryRequest.md#equals-1)
- [fromBinary](LeavesAdjustmentsRecordsHistoryRequest.md#frombinary-1)
- [fromJson](LeavesAdjustmentsRecordsHistoryRequest.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsRecordsHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsRecordsHistoryRequest**(`data?`): [`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md)\> |

#### Returns

[`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md)

#### Overrides

Message\&lt;LeavesAdjustmentsRecordsHistoryRequest\&gt;.constructor

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:886](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_adjustments.scailo_pb.ts#L886)

## Properties

### leaveAdjustmentId

• **leaveAdjustmentId**: `bigint` = `protoInt64.zero`

Stores the leave adjustment ID

**`Generated`**

from field: uint64 leave_adjustment_id = 10;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:877](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_adjustments.scailo_pb.ts#L877)

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

Stores the leave type ID

**`Generated`**

from field: uint64 leave_type_id = 11;

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:884](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_adjustments.scailo_pb.ts#L884)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:893](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_adjustments.scailo_pb.ts#L893)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:891](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_adjustments.scailo_pb.ts#L891)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesAdjustmentsRecordsHistoryRequest"``

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:892](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_adjustments.scailo_pb.ts#L892)

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md) \| `PlainMessage`\<[`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md) \| `PlainMessage`\<[`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md) \| `PlainMessage`\<[`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:910](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_adjustments.scailo_pb.ts#L910)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:898](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_adjustments.scailo_pb.ts#L898)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:902](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_adjustments.scailo_pb.ts#L902)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsRecordsHistoryRequest`](LeavesAdjustmentsRecordsHistoryRequest.md)

#### Defined in

[src/leaves_adjustments.scailo_pb.ts:906](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/leaves_adjustments.scailo_pb.ts#L906)
