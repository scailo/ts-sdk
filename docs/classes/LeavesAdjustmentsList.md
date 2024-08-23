[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsList

# Class: LeavesAdjustmentsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.LeavesAdjustmentsList

## Hierarchy

- `Message`\<[`LeavesAdjustmentsList`](LeavesAdjustmentsList.md)\>

  ↳ **`LeavesAdjustmentsList`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsList.md#constructor)

### Properties

- [list](LeavesAdjustmentsList.md#list)
- [fields](LeavesAdjustmentsList.md#fields)
- [runtime](LeavesAdjustmentsList.md#runtime)
- [typeName](LeavesAdjustmentsList.md#typename)

### Methods

- [clone](LeavesAdjustmentsList.md#clone)
- [equals](LeavesAdjustmentsList.md#equals)
- [fromBinary](LeavesAdjustmentsList.md#frombinary)
- [fromJson](LeavesAdjustmentsList.md#fromjson)
- [fromJsonString](LeavesAdjustmentsList.md#fromjsonstring)
- [getType](LeavesAdjustmentsList.md#gettype)
- [toBinary](LeavesAdjustmentsList.md#tobinary)
- [toJSON](LeavesAdjustmentsList.md#tojson)
- [toJson](LeavesAdjustmentsList.md#tojson-1)
- [toJsonString](LeavesAdjustmentsList.md#tojsonstring)
- [equals](LeavesAdjustmentsList.md#equals-1)
- [fromBinary](LeavesAdjustmentsList.md#frombinary-1)
- [fromJson](LeavesAdjustmentsList.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsList**(`data?`): [`LeavesAdjustmentsList`](LeavesAdjustmentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesAdjustmentsList`](LeavesAdjustmentsList.md)\> |

#### Returns

[`LeavesAdjustmentsList`](LeavesAdjustmentsList.md)

#### Overrides

Message\&lt;LeavesAdjustmentsList\&gt;.constructor

#### Defined in

src/leaves_adjustments.scailo_pb.ts:795

## Properties

### list

• **list**: [`LeaveAdjustment`](LeaveAdjustment.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.LeaveAdjustment list = 1;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:793

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/leaves_adjustments.scailo_pb.ts:802

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/leaves_adjustments.scailo_pb.ts:800

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesAdjustmentsList"``

#### Defined in

src/leaves_adjustments.scailo_pb.ts:801

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsList`](LeavesAdjustmentsList.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsList`](LeavesAdjustmentsList.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsList`](LeavesAdjustmentsList.md) \| `PlainMessage`\<[`LeavesAdjustmentsList`](LeavesAdjustmentsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesAdjustmentsList`](LeavesAdjustmentsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesAdjustmentsList`](LeavesAdjustmentsList.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsList`](LeavesAdjustmentsList.md) \| `PlainMessage`\<[`LeavesAdjustmentsList`](LeavesAdjustmentsList.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsList`](LeavesAdjustmentsList.md) \| `PlainMessage`\<[`LeavesAdjustmentsList`](LeavesAdjustmentsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/leaves_adjustments.scailo_pb.ts:818

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsList`](LeavesAdjustmentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsList`](LeavesAdjustmentsList.md)

#### Defined in

src/leaves_adjustments.scailo_pb.ts:806

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsList`](LeavesAdjustmentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsList`](LeavesAdjustmentsList.md)

#### Defined in

src/leaves_adjustments.scailo_pb.ts:810

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsList`](LeavesAdjustmentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsList`](LeavesAdjustmentsList.md)

#### Defined in

src/leaves_adjustments.scailo_pb.ts:814
