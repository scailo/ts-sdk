[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamMessagesList

# Class: VendorStreamMessagesList

Describes the message consisting of the list of vendor stream messages

**`Generated`**

from message Scailo.VendorStreamMessagesList

## Hierarchy

- `Message`\<[`VendorStreamMessagesList`](VendorStreamMessagesList.md)\>

  ↳ **`VendorStreamMessagesList`**

## Table of contents

### Constructors

- [constructor](VendorStreamMessagesList.md#constructor)

### Properties

- [list](VendorStreamMessagesList.md#list)
- [fields](VendorStreamMessagesList.md#fields)
- [runtime](VendorStreamMessagesList.md#runtime)
- [typeName](VendorStreamMessagesList.md#typename)

### Methods

- [clone](VendorStreamMessagesList.md#clone)
- [equals](VendorStreamMessagesList.md#equals)
- [fromBinary](VendorStreamMessagesList.md#frombinary)
- [fromJson](VendorStreamMessagesList.md#fromjson)
- [fromJsonString](VendorStreamMessagesList.md#fromjsonstring)
- [getType](VendorStreamMessagesList.md#gettype)
- [toBinary](VendorStreamMessagesList.md#tobinary)
- [toJSON](VendorStreamMessagesList.md#tojson)
- [toJson](VendorStreamMessagesList.md#tojson-1)
- [toJsonString](VendorStreamMessagesList.md#tojsonstring)
- [equals](VendorStreamMessagesList.md#equals-1)
- [fromBinary](VendorStreamMessagesList.md#frombinary-1)
- [fromJson](VendorStreamMessagesList.md#fromjson-1)
- [fromJsonString](VendorStreamMessagesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamMessagesList**(`data?`): [`VendorStreamMessagesList`](VendorStreamMessagesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamMessagesList`](VendorStreamMessagesList.md)\> |

#### Returns

[`VendorStreamMessagesList`](VendorStreamMessagesList.md)

#### Overrides

Message\&lt;VendorStreamMessagesList\&gt;.constructor

#### Defined in

src/vendor_streams.scailo_pb.ts:1560

## Properties

### list

• **list**: [`VendorStreamMessage`](VendorStreamMessage.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.VendorStreamMessage list = 1;

#### Defined in

src/vendor_streams.scailo_pb.ts:1558

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_streams.scailo_pb.ts:1567

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_streams.scailo_pb.ts:1565

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamMessagesList"``

#### Defined in

src/vendor_streams.scailo_pb.ts:1566

## Methods

### clone

▸ **clone**(): [`VendorStreamMessagesList`](VendorStreamMessagesList.md)

Create a deep copy.

#### Returns

[`VendorStreamMessagesList`](VendorStreamMessagesList.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamMessagesList`](VendorStreamMessagesList.md) \| `PlainMessage`\<[`VendorStreamMessagesList`](VendorStreamMessagesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamMessagesList`](VendorStreamMessagesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamMessagesList`](VendorStreamMessagesList.md)\>

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
| `a` | `undefined` \| [`VendorStreamMessagesList`](VendorStreamMessagesList.md) \| `PlainMessage`\<[`VendorStreamMessagesList`](VendorStreamMessagesList.md)\> |
| `b` | `undefined` \| [`VendorStreamMessagesList`](VendorStreamMessagesList.md) \| `PlainMessage`\<[`VendorStreamMessagesList`](VendorStreamMessagesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_streams.scailo_pb.ts:1583

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamMessagesList`](VendorStreamMessagesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamMessagesList`](VendorStreamMessagesList.md)

#### Defined in

src/vendor_streams.scailo_pb.ts:1571

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamMessagesList`](VendorStreamMessagesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamMessagesList`](VendorStreamMessagesList.md)

#### Defined in

src/vendor_streams.scailo_pb.ts:1575

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamMessagesList`](VendorStreamMessagesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamMessagesList`](VendorStreamMessagesList.md)

#### Defined in

src/vendor_streams.scailo_pb.ts:1579
