[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationRequestAncillaryParameters

# Class: QuotationRequestAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.QuotationRequestAncillaryParameters

## Hierarchy

- `Message`\<[`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md)\>

  ↳ **`QuotationRequestAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](QuotationRequestAncillaryParameters.md#constructor)

### Properties

- [currencyUuid](QuotationRequestAncillaryParameters.md#currencyuuid)
- [purchaseEnquiryUuid](QuotationRequestAncillaryParameters.md#purchaseenquiryuuid)
- [fields](QuotationRequestAncillaryParameters.md#fields)
- [runtime](QuotationRequestAncillaryParameters.md#runtime)
- [typeName](QuotationRequestAncillaryParameters.md#typename)

### Methods

- [clone](QuotationRequestAncillaryParameters.md#clone)
- [equals](QuotationRequestAncillaryParameters.md#equals)
- [fromBinary](QuotationRequestAncillaryParameters.md#frombinary)
- [fromJson](QuotationRequestAncillaryParameters.md#fromjson)
- [fromJsonString](QuotationRequestAncillaryParameters.md#fromjsonstring)
- [getType](QuotationRequestAncillaryParameters.md#gettype)
- [toBinary](QuotationRequestAncillaryParameters.md#tobinary)
- [toJSON](QuotationRequestAncillaryParameters.md#tojson)
- [toJson](QuotationRequestAncillaryParameters.md#tojson-1)
- [toJsonString](QuotationRequestAncillaryParameters.md#tojsonstring)
- [equals](QuotationRequestAncillaryParameters.md#equals-1)
- [fromBinary](QuotationRequestAncillaryParameters.md#frombinary-1)
- [fromJson](QuotationRequestAncillaryParameters.md#fromjson-1)
- [fromJsonString](QuotationRequestAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationRequestAncillaryParameters**(`data?`): [`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md)\> |

#### Returns

[`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md)

#### Overrides

Message\&lt;QuotationRequestAncillaryParameters\&gt;.constructor

#### Defined in

src/quotations_requests.scailo_pb.ts:543

## Properties

### currencyUuid

• **currencyUuid**: `string` = `""`

The UUID of the currency (the UUID of the associated currency_id)

**`Generated`**

from field: string currency_uuid = 214;

#### Defined in

src/quotations_requests.scailo_pb.ts:541

___

### purchaseEnquiryUuid

• **purchaseEnquiryUuid**: `string` = `""`

The UUID of the purchase_enquiry_id (the UUID of the associated purchase_enquiry_id)

**`Generated`**

from field: string purchase_enquiry_uuid = 212;

#### Defined in

src/quotations_requests.scailo_pb.ts:534

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/quotations_requests.scailo_pb.ts:550

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/quotations_requests.scailo_pb.ts:548

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationRequestAncillaryParameters"``

#### Defined in

src/quotations_requests.scailo_pb.ts:549

## Methods

### clone

▸ **clone**(): [`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md)

Create a deep copy.

#### Returns

[`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md) \| `PlainMessage`\<[`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md) \| `PlainMessage`\<[`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md)\> |
| `b` | `undefined` \| [`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md) \| `PlainMessage`\<[`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

src/quotations_requests.scailo_pb.ts:567

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:555

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:559

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationRequestAncillaryParameters`](QuotationRequestAncillaryParameters.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:563
