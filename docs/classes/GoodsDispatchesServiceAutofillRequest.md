[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceAutofillRequest

# Class: GoodsDispatchesServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Scailo.GoodsDispatchesServiceAutofillRequest

## Hierarchy

- `Message`\<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\>

  ↳ **`GoodsDispatchesServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceAutofillRequest.md#constructor)

### Properties

- [splitIntoUnitQuantity](GoodsDispatchesServiceAutofillRequest.md#splitintounitquantity)
- [userComment](GoodsDispatchesServiceAutofillRequest.md#usercomment)
- [uuid](GoodsDispatchesServiceAutofillRequest.md#uuid)
- [fields](GoodsDispatchesServiceAutofillRequest.md#fields)
- [runtime](GoodsDispatchesServiceAutofillRequest.md#runtime)
- [typeName](GoodsDispatchesServiceAutofillRequest.md#typename)

### Methods

- [clone](GoodsDispatchesServiceAutofillRequest.md#clone)
- [equals](GoodsDispatchesServiceAutofillRequest.md#equals)
- [fromBinary](GoodsDispatchesServiceAutofillRequest.md#frombinary)
- [fromJson](GoodsDispatchesServiceAutofillRequest.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceAutofillRequest.md#fromjsonstring)
- [getType](GoodsDispatchesServiceAutofillRequest.md#gettype)
- [toBinary](GoodsDispatchesServiceAutofillRequest.md#tobinary)
- [toJSON](GoodsDispatchesServiceAutofillRequest.md#tojson)
- [toJson](GoodsDispatchesServiceAutofillRequest.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceAutofillRequest.md#tojsonstring)
- [equals](GoodsDispatchesServiceAutofillRequest.md#equals-1)
- [fromBinary](GoodsDispatchesServiceAutofillRequest.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceAutofillRequest**(`data?`): [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\> |

#### Returns

[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Overrides

Message\&lt;GoodsDispatchesServiceAutofillRequest\&gt;.constructor

#### Defined in

src/goods_dispatches.scailo_pb.ts:498

## Properties

### splitIntoUnitQuantity

• **splitIntoUnitQuantity**: `boolean` = `false`

Stores if the inventory needs to be split into unit quantities

**`Generated`**

from field: bool split_into_unit_quantity = 10;

#### Defined in

src/goods_dispatches.scailo_pb.ts:496

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/goods_dispatches.scailo_pb.ts:482

___

### uuid

• **uuid**: `string` = `""`

The UUID of the record that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

src/goods_dispatches.scailo_pb.ts:489

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/goods_dispatches.scailo_pb.ts:505

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/goods_dispatches.scailo_pb.ts:503

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchesServiceAutofillRequest"``

#### Defined in

src/goods_dispatches.scailo_pb.ts:504

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/goods_dispatches.scailo_pb.ts:523

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Defined in

src/goods_dispatches.scailo_pb.ts:511

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Defined in

src/goods_dispatches.scailo_pb.ts:515

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Defined in

src/goods_dispatches.scailo_pb.ts:519
