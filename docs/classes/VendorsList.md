[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorsList

# Class: VendorsList

Describes the message consisting of the list of vendors

**`Generated`**

from message Scailo.VendorsList

## Hierarchy

- `Message`\<[`VendorsList`](VendorsList.md)\>

  ↳ **`VendorsList`**

## Table of contents

### Constructors

- [constructor](VendorsList.md#constructor)

### Properties

- [list](VendorsList.md#list)
- [fields](VendorsList.md#fields)
- [runtime](VendorsList.md#runtime)
- [typeName](VendorsList.md#typename)

### Methods

- [clone](VendorsList.md#clone)
- [equals](VendorsList.md#equals)
- [fromBinary](VendorsList.md#frombinary)
- [fromJson](VendorsList.md#fromjson)
- [fromJsonString](VendorsList.md#fromjsonstring)
- [getType](VendorsList.md#gettype)
- [toBinary](VendorsList.md#tobinary)
- [toJSON](VendorsList.md#tojson)
- [toJson](VendorsList.md#tojson-1)
- [toJsonString](VendorsList.md#tojsonstring)
- [equals](VendorsList.md#equals-1)
- [fromBinary](VendorsList.md#frombinary-1)
- [fromJson](VendorsList.md#fromjson-1)
- [fromJsonString](VendorsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorsList**(`data?`): [`VendorsList`](VendorsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorsList`](VendorsList.md)\> |

#### Returns

[`VendorsList`](VendorsList.md)

#### Overrides

Message\&lt;VendorsList\&gt;.constructor

#### Defined in

src/vendors.scailo_pb.ts:1132

## Properties

### list

• **list**: [`Vendor`](Vendor.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.Vendor list = 1;

#### Defined in

src/vendors.scailo_pb.ts:1130

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendors.scailo_pb.ts:1139

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendors.scailo_pb.ts:1137

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorsList"``

#### Defined in

src/vendors.scailo_pb.ts:1138

## Methods

### clone

▸ **clone**(): [`VendorsList`](VendorsList.md)

Create a deep copy.

#### Returns

[`VendorsList`](VendorsList.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorsList`](VendorsList.md) \| `PlainMessage`\<[`VendorsList`](VendorsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorsList`](VendorsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorsList`](VendorsList.md)\>

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
| `a` | `undefined` \| [`VendorsList`](VendorsList.md) \| `PlainMessage`\<[`VendorsList`](VendorsList.md)\> |
| `b` | `undefined` \| [`VendorsList`](VendorsList.md) \| `PlainMessage`\<[`VendorsList`](VendorsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendors.scailo_pb.ts:1155

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorsList`](VendorsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorsList`](VendorsList.md)

#### Defined in

src/vendors.scailo_pb.ts:1143

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorsList`](VendorsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsList`](VendorsList.md)

#### Defined in

src/vendors.scailo_pb.ts:1147

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorsList`](VendorsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsList`](VendorsList.md)

#### Defined in

src/vendors.scailo_pb.ts:1151
