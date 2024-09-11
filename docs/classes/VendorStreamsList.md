[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamsList

# Class: VendorStreamsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.VendorStreamsList

## Hierarchy

- `Message`\<[`VendorStreamsList`](VendorStreamsList.md)\>

  ↳ **`VendorStreamsList`**

## Table of contents

### Constructors

- [constructor](VendorStreamsList.md#constructor)

### Properties

- [list](VendorStreamsList.md#list)
- [fields](VendorStreamsList.md#fields)
- [runtime](VendorStreamsList.md#runtime)
- [typeName](VendorStreamsList.md#typename)

### Methods

- [clone](VendorStreamsList.md#clone)
- [equals](VendorStreamsList.md#equals)
- [fromBinary](VendorStreamsList.md#frombinary)
- [fromJson](VendorStreamsList.md#fromjson)
- [fromJsonString](VendorStreamsList.md#fromjsonstring)
- [getType](VendorStreamsList.md#gettype)
- [toBinary](VendorStreamsList.md#tobinary)
- [toJSON](VendorStreamsList.md#tojson)
- [toJson](VendorStreamsList.md#tojson-1)
- [toJsonString](VendorStreamsList.md#tojsonstring)
- [equals](VendorStreamsList.md#equals-1)
- [fromBinary](VendorStreamsList.md#frombinary-1)
- [fromJson](VendorStreamsList.md#fromjson-1)
- [fromJsonString](VendorStreamsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamsList**(`data?`): [`VendorStreamsList`](VendorStreamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamsList`](VendorStreamsList.md)\> |

#### Returns

[`VendorStreamsList`](VendorStreamsList.md)

#### Overrides

Message\&lt;VendorStreamsList\&gt;.constructor

#### Defined in

src/vendorstreams.scailo_pb.ts:687

## Properties

### list

• **list**: [`VendorStream`](VendorStream.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.VendorStream list = 1;

#### Defined in

src/vendorstreams.scailo_pb.ts:685

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendorstreams.scailo_pb.ts:694

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendorstreams.scailo_pb.ts:692

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamsList"``

#### Defined in

src/vendorstreams.scailo_pb.ts:693

## Methods

### clone

▸ **clone**(): [`VendorStreamsList`](VendorStreamsList.md)

Create a deep copy.

#### Returns

[`VendorStreamsList`](VendorStreamsList.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamsList`](VendorStreamsList.md) \| `PlainMessage`\<[`VendorStreamsList`](VendorStreamsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamsList`](VendorStreamsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamsList`](VendorStreamsList.md)\>

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
| `a` | `undefined` \| [`VendorStreamsList`](VendorStreamsList.md) \| `PlainMessage`\<[`VendorStreamsList`](VendorStreamsList.md)\> |
| `b` | `undefined` \| [`VendorStreamsList`](VendorStreamsList.md) \| `PlainMessage`\<[`VendorStreamsList`](VendorStreamsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendorstreams.scailo_pb.ts:710

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamsList`](VendorStreamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamsList`](VendorStreamsList.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:698

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamsList`](VendorStreamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsList`](VendorStreamsList.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:702

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamsList`](VendorStreamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsList`](VendorStreamsList.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:706
