[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesEnquiriesServiceItemCreateRequest

# Class: PurchasesEnquiriesServiceItemCreateRequest

Describes the parameters required to add an item to a purchase enquiry

**`Generated`**

from message Scailo.PurchasesEnquiriesServiceItemCreateRequest

## Hierarchy

- `Message`\<[`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md)\>

  ↳ **`PurchasesEnquiriesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesEnquiriesServiceItemCreateRequest.md#constructor)

### Properties

- [description](PurchasesEnquiriesServiceItemCreateRequest.md#description)
- [name](PurchasesEnquiriesServiceItemCreateRequest.md#name)
- [purchaseEnquiryId](PurchasesEnquiriesServiceItemCreateRequest.md#purchaseenquiryid)
- [quantity](PurchasesEnquiriesServiceItemCreateRequest.md#quantity)
- [requiredBy](PurchasesEnquiriesServiceItemCreateRequest.md#requiredby)
- [uomId](PurchasesEnquiriesServiceItemCreateRequest.md#uomid)
- [userComment](PurchasesEnquiriesServiceItemCreateRequest.md#usercomment)
- [fields](PurchasesEnquiriesServiceItemCreateRequest.md#fields)
- [runtime](PurchasesEnquiriesServiceItemCreateRequest.md#runtime)
- [typeName](PurchasesEnquiriesServiceItemCreateRequest.md#typename)

### Methods

- [clone](PurchasesEnquiriesServiceItemCreateRequest.md#clone)
- [equals](PurchasesEnquiriesServiceItemCreateRequest.md#equals)
- [fromBinary](PurchasesEnquiriesServiceItemCreateRequest.md#frombinary)
- [fromJson](PurchasesEnquiriesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](PurchasesEnquiriesServiceItemCreateRequest.md#fromjsonstring)
- [getType](PurchasesEnquiriesServiceItemCreateRequest.md#gettype)
- [toBinary](PurchasesEnquiriesServiceItemCreateRequest.md#tobinary)
- [toJSON](PurchasesEnquiriesServiceItemCreateRequest.md#tojson)
- [toJson](PurchasesEnquiriesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](PurchasesEnquiriesServiceItemCreateRequest.md#tojsonstring)
- [equals](PurchasesEnquiriesServiceItemCreateRequest.md#equals-1)
- [fromBinary](PurchasesEnquiriesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](PurchasesEnquiriesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](PurchasesEnquiriesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesEnquiriesServiceItemCreateRequest**(`data?`): [`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md)\> |

#### Returns

[`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md)

#### Overrides

Message\&lt;PurchasesEnquiriesServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:722](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L722)

## Properties

### description

• **description**: `string` = `""`

The description of the item

**`Generated`**

from field: string description = 19;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:720](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L720)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:692](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L692)

___

### purchaseEnquiryId

• **purchaseEnquiryId**: `bigint` = `protoInt64.zero`

Stores the purchase enquiry ID

**`Generated`**

from field: uint64 purchase_enquiry_id = 10;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:685](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L685)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity required (in cents)

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:699](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L699)

___

### requiredBy

• **requiredBy**: `string` = `""`

The required by date

**`Generated`**

from field: string required_by = 18;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:713](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L713)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: uint64 uom_id = 13;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:706](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L706)

___

### userComment

• **userComment**: `string` = `""`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:678](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L678)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:729](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L729)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:727](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L727)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesEnquiriesServiceItemCreateRequest"``

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:728](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L728)

## Methods

### clone

▸ **clone**(): [`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:751](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L751)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:739](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L739)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:743](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L743)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceItemCreateRequest`](PurchasesEnquiriesServiceItemCreateRequest.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:747](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L747)
