[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationResponseAncillaryParameters

# Class: QuotationResponseAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.QuotationResponseAncillaryParameters

## Hierarchy

- `Message`\<[`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md)\>

  ↳ **`QuotationResponseAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](QuotationResponseAncillaryParameters.md#constructor)

### Properties

- [currencyUuid](QuotationResponseAncillaryParameters.md#currencyuuid)
- [quotationRequestUuid](QuotationResponseAncillaryParameters.md#quotationrequestuuid)
- [fields](QuotationResponseAncillaryParameters.md#fields)
- [runtime](QuotationResponseAncillaryParameters.md#runtime)
- [typeName](QuotationResponseAncillaryParameters.md#typename)

### Methods

- [clone](QuotationResponseAncillaryParameters.md#clone)
- [equals](QuotationResponseAncillaryParameters.md#equals)
- [fromBinary](QuotationResponseAncillaryParameters.md#frombinary)
- [fromJson](QuotationResponseAncillaryParameters.md#fromjson)
- [fromJsonString](QuotationResponseAncillaryParameters.md#fromjsonstring)
- [getType](QuotationResponseAncillaryParameters.md#gettype)
- [toBinary](QuotationResponseAncillaryParameters.md#tobinary)
- [toJSON](QuotationResponseAncillaryParameters.md#tojson)
- [toJson](QuotationResponseAncillaryParameters.md#tojson-1)
- [toJsonString](QuotationResponseAncillaryParameters.md#tojsonstring)
- [equals](QuotationResponseAncillaryParameters.md#equals-1)
- [fromBinary](QuotationResponseAncillaryParameters.md#frombinary-1)
- [fromJson](QuotationResponseAncillaryParameters.md#fromjson-1)
- [fromJsonString](QuotationResponseAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationResponseAncillaryParameters**(`data?`): [`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md)\> |

#### Returns

[`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md)

#### Overrides

Message\&lt;QuotationResponseAncillaryParameters\&gt;.constructor

#### Defined in

src/quotations_responses.scailo_pb.ts:461

## Properties

### currencyUuid

• **currencyUuid**: `string` = `""`

The UUID of the currency (the UUID of the associated currency_id)

**`Generated`**

from field: string currency_uuid = 215;

#### Defined in

src/quotations_responses.scailo_pb.ts:459

___

### quotationRequestUuid

• **quotationRequestUuid**: `string` = `""`

The UUID of the quotation_request_id (the UUID of the associated quotation_request_id)

**`Generated`**

from field: string quotation_request_uuid = 212;

#### Defined in

src/quotations_responses.scailo_pb.ts:452

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/quotations_responses.scailo_pb.ts:468

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/quotations_responses.scailo_pb.ts:466

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationResponseAncillaryParameters"``

#### Defined in

src/quotations_responses.scailo_pb.ts:467

## Methods

### clone

▸ **clone**(): [`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md)

Create a deep copy.

#### Returns

[`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md) \| `PlainMessage`\<[`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md) \| `PlainMessage`\<[`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md)\> |
| `b` | `undefined` \| [`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md) \| `PlainMessage`\<[`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

src/quotations_responses.scailo_pb.ts:485

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:473

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:477

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationResponseAncillaryParameters`](QuotationResponseAncillaryParameters.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:481
