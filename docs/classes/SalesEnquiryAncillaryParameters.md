[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiryAncillaryParameters

# Class: SalesEnquiryAncillaryParameters

Represents the external-facing, unique identifiers (UUIDs) of a Sales Enquiry's core dependencies.
By exposing UUIDs instead of internal sequential integer IDs, this message allows
external clients and frontend applications to securely reference underlying entities
(such as clients, locations, and currencies) without risking data enumeration or leaking system architecture.

**`Generated`**

from message Scailo.SalesEnquiryAncillaryParameters

## Hierarchy

- `Message`\<[`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md)\>

  ↳ **`SalesEnquiryAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](SalesEnquiryAncillaryParameters.md#constructor)

### Properties

- [buyerClientUuid](SalesEnquiryAncillaryParameters.md#buyerclientuuid)
- [consigneeClientUuid](SalesEnquiryAncillaryParameters.md#consigneeclientuuid)
- [currencyUuid](SalesEnquiryAncillaryParameters.md#currencyuuid)
- [fields](SalesEnquiryAncillaryParameters.md#fields)
- [runtime](SalesEnquiryAncillaryParameters.md#runtime)
- [typeName](SalesEnquiryAncillaryParameters.md#typename)

### Methods

- [clone](SalesEnquiryAncillaryParameters.md#clone)
- [equals](SalesEnquiryAncillaryParameters.md#equals)
- [fromBinary](SalesEnquiryAncillaryParameters.md#frombinary)
- [fromJson](SalesEnquiryAncillaryParameters.md#fromjson)
- [fromJsonString](SalesEnquiryAncillaryParameters.md#fromjsonstring)
- [getType](SalesEnquiryAncillaryParameters.md#gettype)
- [toBinary](SalesEnquiryAncillaryParameters.md#tobinary)
- [toJSON](SalesEnquiryAncillaryParameters.md#tojson)
- [toJson](SalesEnquiryAncillaryParameters.md#tojson-1)
- [toJsonString](SalesEnquiryAncillaryParameters.md#tojsonstring)
- [equals](SalesEnquiryAncillaryParameters.md#equals-1)
- [fromBinary](SalesEnquiryAncillaryParameters.md#frombinary-1)
- [fromJson](SalesEnquiryAncillaryParameters.md#fromjson-1)
- [fromJsonString](SalesEnquiryAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiryAncillaryParameters**(`data?`): [`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md)\> |

#### Returns

[`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md)

#### Overrides

Message\&lt;SalesEnquiryAncillaryParameters\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:796](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L796)

## Properties

### buyerClientUuid

• **buyerClientUuid**: `string` = `""`

**`Description`**

The globally unique identifier (UUID) of the buyer client, correlating to the internal `buyer_client_id`.

**`Example`**

```ts
"661f9511-f39c-42d5-b827-557766551111"
```

**`Format`**

Valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string buyer_client_uuid = 213;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:782](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L782)

___

### consigneeClientUuid

• **consigneeClientUuid**: `string` = `""`

**`Description`**

The globally unique identifier (UUID) of the consignee client, correlating to the internal `consignee_client_id`.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Format`**

Valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string consignee_client_uuid = 212;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:770](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L770)

___

### currencyUuid

• **currencyUuid**: `string` = `""`

**`Description`**

The globally unique identifier (UUID) of the associated currency, correlating to the internal `currency_id`.

**`Example`**

```ts
"883b1733-b51e-64f7-d049-779988773333"
```

**`Format`**

Valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string currency_uuid = 215;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:794](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L794)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:803](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L803)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:801](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L801)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiryAncillaryParameters"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:802](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L802)

## Methods

### clone

▸ **clone**(): [`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md)

Create a deep copy.

#### Returns

[`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md) \| `PlainMessage`\<[`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md) \| `PlainMessage`\<[`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md)\> |
| `b` | `undefined` \| [`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md) \| `PlainMessage`\<[`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:821](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L821)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:809](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L809)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:813](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L813)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryAncillaryParameters`](SalesEnquiryAncillaryParameters.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:817](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L817)
