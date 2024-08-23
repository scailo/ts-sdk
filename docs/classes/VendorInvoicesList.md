[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesList

# Class: VendorInvoicesList

Describes the message consisting of the list of vendor invoices

**`Generated`**

from message Scailo.VendorInvoicesList

## Hierarchy

- `Message`\<[`VendorInvoicesList`](VendorInvoicesList.md)\>

  ↳ **`VendorInvoicesList`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesList.md#constructor)

### Properties

- [list](VendorInvoicesList.md#list)
- [fields](VendorInvoicesList.md#fields)
- [runtime](VendorInvoicesList.md#runtime)
- [typeName](VendorInvoicesList.md#typename)

### Methods

- [clone](VendorInvoicesList.md#clone)
- [equals](VendorInvoicesList.md#equals)
- [fromBinary](VendorInvoicesList.md#frombinary)
- [fromJson](VendorInvoicesList.md#fromjson)
- [fromJsonString](VendorInvoicesList.md#fromjsonstring)
- [getType](VendorInvoicesList.md#gettype)
- [toBinary](VendorInvoicesList.md#tobinary)
- [toJSON](VendorInvoicesList.md#tojson)
- [toJson](VendorInvoicesList.md#tojson-1)
- [toJsonString](VendorInvoicesList.md#tojsonstring)
- [equals](VendorInvoicesList.md#equals-1)
- [fromBinary](VendorInvoicesList.md#frombinary-1)
- [fromJson](VendorInvoicesList.md#fromjson-1)
- [fromJsonString](VendorInvoicesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesList**(`data?`): [`VendorInvoicesList`](VendorInvoicesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesList`](VendorInvoicesList.md)\> |

#### Returns

[`VendorInvoicesList`](VendorInvoicesList.md)

#### Overrides

Message\&lt;VendorInvoicesList\&gt;.constructor

#### Defined in

src/vendor_invoices.scailo_pb.ts:1192

## Properties

### list

• **list**: [`VendorInvoice`](VendorInvoice.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.VendorInvoice list = 1;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1190

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1199

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1197

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesList"``

#### Defined in

src/vendor_invoices.scailo_pb.ts:1198

## Methods

### clone

▸ **clone**(): [`VendorInvoicesList`](VendorInvoicesList.md)

Create a deep copy.

#### Returns

[`VendorInvoicesList`](VendorInvoicesList.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesList`](VendorInvoicesList.md) \| `PlainMessage`\<[`VendorInvoicesList`](VendorInvoicesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesList`](VendorInvoicesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesList`](VendorInvoicesList.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesList`](VendorInvoicesList.md) \| `PlainMessage`\<[`VendorInvoicesList`](VendorInvoicesList.md)\> |
| `b` | `undefined` \| [`VendorInvoicesList`](VendorInvoicesList.md) \| `PlainMessage`\<[`VendorInvoicesList`](VendorInvoicesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_invoices.scailo_pb.ts:1215

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesList`](VendorInvoicesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesList`](VendorInvoicesList.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1203

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesList`](VendorInvoicesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesList`](VendorInvoicesList.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1207

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesList`](VendorInvoicesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesList`](VendorInvoicesList.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:1211
