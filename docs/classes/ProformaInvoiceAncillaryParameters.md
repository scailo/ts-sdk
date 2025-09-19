[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoiceAncillaryParameters

# Class: ProformaInvoiceAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.ProformaInvoiceAncillaryParameters

## Hierarchy

- `Message`\<[`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md)\>

  ↳ **`ProformaInvoiceAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](ProformaInvoiceAncillaryParameters.md#constructor)

### Properties

- [currencyUuid](ProformaInvoiceAncillaryParameters.md#currencyuuid)
- [refUuid](ProformaInvoiceAncillaryParameters.md#refuuid)
- [fields](ProformaInvoiceAncillaryParameters.md#fields)
- [runtime](ProformaInvoiceAncillaryParameters.md#runtime)
- [typeName](ProformaInvoiceAncillaryParameters.md#typename)

### Methods

- [clone](ProformaInvoiceAncillaryParameters.md#clone)
- [equals](ProformaInvoiceAncillaryParameters.md#equals)
- [fromBinary](ProformaInvoiceAncillaryParameters.md#frombinary)
- [fromJson](ProformaInvoiceAncillaryParameters.md#fromjson)
- [fromJsonString](ProformaInvoiceAncillaryParameters.md#fromjsonstring)
- [getType](ProformaInvoiceAncillaryParameters.md#gettype)
- [toBinary](ProformaInvoiceAncillaryParameters.md#tobinary)
- [toJSON](ProformaInvoiceAncillaryParameters.md#tojson)
- [toJson](ProformaInvoiceAncillaryParameters.md#tojson-1)
- [toJsonString](ProformaInvoiceAncillaryParameters.md#tojsonstring)
- [equals](ProformaInvoiceAncillaryParameters.md#equals-1)
- [fromBinary](ProformaInvoiceAncillaryParameters.md#frombinary-1)
- [fromJson](ProformaInvoiceAncillaryParameters.md#fromjson-1)
- [fromJsonString](ProformaInvoiceAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoiceAncillaryParameters**(`data?`): [`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md)\> |

#### Returns

[`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md)

#### Overrides

Message\&lt;ProformaInvoiceAncillaryParameters\&gt;.constructor

#### Defined in

[src/proforma_invoices.scailo_pb.ts:685](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L685)

## Properties

### currencyUuid

• **currencyUuid**: `string` = `""`

The UUID of the currency (the UUID of the associated currency)

**`Generated`**

from field: string currency_uuid = 214;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:683](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L683)

___

### refUuid

• **refUuid**: `string` = `""`

The UUID of the ref_id (the UUID of the associated ref_id)

**`Generated`**

from field: string ref_uuid = 213;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:676](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L676)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:692](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L692)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:690](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L690)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoiceAncillaryParameters"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:691](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L691)

## Methods

### clone

▸ **clone**(): [`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md)

Create a deep copy.

#### Returns

[`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md) \| `PlainMessage`\<[`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md) \| `PlainMessage`\<[`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md)\> |
| `b` | `undefined` \| [`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md) \| `PlainMessage`\<[`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:709](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L709)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:697](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L697)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:701](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L701)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoiceAncillaryParameters`](ProformaInvoiceAncillaryParameters.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:705](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/proforma_invoices.scailo_pb.ts#L705)
