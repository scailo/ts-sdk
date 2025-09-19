[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoiceAncillaryParameters

# Class: VendorInvoiceAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.VendorInvoiceAncillaryParameters

## Hierarchy

- `Message`\<[`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md)\>

  ↳ **`VendorInvoiceAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](VendorInvoiceAncillaryParameters.md#constructor)

### Properties

- [currencyUuid](VendorInvoiceAncillaryParameters.md#currencyuuid)
- [refUuid](VendorInvoiceAncillaryParameters.md#refuuid)
- [fields](VendorInvoiceAncillaryParameters.md#fields)
- [runtime](VendorInvoiceAncillaryParameters.md#runtime)
- [typeName](VendorInvoiceAncillaryParameters.md#typename)

### Methods

- [clone](VendorInvoiceAncillaryParameters.md#clone)
- [equals](VendorInvoiceAncillaryParameters.md#equals)
- [fromBinary](VendorInvoiceAncillaryParameters.md#frombinary)
- [fromJson](VendorInvoiceAncillaryParameters.md#fromjson)
- [fromJsonString](VendorInvoiceAncillaryParameters.md#fromjsonstring)
- [getType](VendorInvoiceAncillaryParameters.md#gettype)
- [toBinary](VendorInvoiceAncillaryParameters.md#tobinary)
- [toJSON](VendorInvoiceAncillaryParameters.md#tojson)
- [toJson](VendorInvoiceAncillaryParameters.md#tojson-1)
- [toJsonString](VendorInvoiceAncillaryParameters.md#tojsonstring)
- [equals](VendorInvoiceAncillaryParameters.md#equals-1)
- [fromBinary](VendorInvoiceAncillaryParameters.md#frombinary-1)
- [fromJson](VendorInvoiceAncillaryParameters.md#fromjson-1)
- [fromJsonString](VendorInvoiceAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoiceAncillaryParameters**(`data?`): [`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md)\> |

#### Returns

[`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md)

#### Overrides

Message\&lt;VendorInvoiceAncillaryParameters\&gt;.constructor

#### Defined in

[src/vendor_invoices.scailo_pb.ts:650](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L650)

## Properties

### currencyUuid

• **currencyUuid**: `string` = `""`

The UUID of the currency (the UUID of the associated currency)

**`Generated`**

from field: string currency_uuid = 214;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:648](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L648)

___

### refUuid

• **refUuid**: `string` = `""`

The UUID of the ref_id (the UUID of the associated ref_id)

**`Generated`**

from field: string ref_uuid = 213;

#### Defined in

[src/vendor_invoices.scailo_pb.ts:641](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L641)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:657](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L657)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:655](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L655)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoiceAncillaryParameters"``

#### Defined in

[src/vendor_invoices.scailo_pb.ts:656](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L656)

## Methods

### clone

▸ **clone**(): [`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md)

Create a deep copy.

#### Returns

[`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md) \| `PlainMessage`\<[`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md) \| `PlainMessage`\<[`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md)\> |
| `b` | `undefined` \| [`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md) \| `PlainMessage`\<[`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendor_invoices.scailo_pb.ts:674](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L674)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:662](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L662)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:666](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L666)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoiceAncillaryParameters`](VendorInvoiceAncillaryParameters.md)

#### Defined in

[src/vendor_invoices.scailo_pb.ts:670](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendor_invoices.scailo_pb.ts#L670)
