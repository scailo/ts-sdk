[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesEnquiriesServiceItemUpdateRequest

# Class: PurchasesEnquiriesServiceItemUpdateRequest

Describes the parameters required to update an item in a purchase enquiry

**`Generated`**

from message Scailo.PurchasesEnquiriesServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md)\>

  ↳ **`PurchasesEnquiriesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesEnquiriesServiceItemUpdateRequest.md#constructor)

### Properties

- [description](PurchasesEnquiriesServiceItemUpdateRequest.md#description)
- [id](PurchasesEnquiriesServiceItemUpdateRequest.md#id)
- [name](PurchasesEnquiriesServiceItemUpdateRequest.md#name)
- [quantity](PurchasesEnquiriesServiceItemUpdateRequest.md#quantity)
- [requiredBy](PurchasesEnquiriesServiceItemUpdateRequest.md#requiredby)
- [uomId](PurchasesEnquiriesServiceItemUpdateRequest.md#uomid)
- [userComment](PurchasesEnquiriesServiceItemUpdateRequest.md#usercomment)
- [fields](PurchasesEnquiriesServiceItemUpdateRequest.md#fields)
- [runtime](PurchasesEnquiriesServiceItemUpdateRequest.md#runtime)
- [typeName](PurchasesEnquiriesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](PurchasesEnquiriesServiceItemUpdateRequest.md#clone)
- [equals](PurchasesEnquiriesServiceItemUpdateRequest.md#equals)
- [fromBinary](PurchasesEnquiriesServiceItemUpdateRequest.md#frombinary)
- [fromJson](PurchasesEnquiriesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](PurchasesEnquiriesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](PurchasesEnquiriesServiceItemUpdateRequest.md#gettype)
- [toBinary](PurchasesEnquiriesServiceItemUpdateRequest.md#tobinary)
- [toJSON](PurchasesEnquiriesServiceItemUpdateRequest.md#tojson)
- [toJson](PurchasesEnquiriesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](PurchasesEnquiriesServiceItemUpdateRequest.md#tojsonstring)
- [equals](PurchasesEnquiriesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](PurchasesEnquiriesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](PurchasesEnquiriesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](PurchasesEnquiriesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesEnquiriesServiceItemUpdateRequest**(`data?`): [`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md)\> |

#### Returns

[`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;PurchasesEnquiriesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/purchases_enquiries.scailo_pb.ts:692

## Properties

### description

• **description**: `string` = `""`

The description of the item

**`Generated`**

from field: string description = 19;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:690

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:655

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:662

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity required (in cents)

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:669

___

### requiredBy

• **requiredBy**: `string` = `""`

The required by date

**`Generated`**

from field: string required_by = 18;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:683

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: uint64 uom_id = 13;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:676

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:648

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_enquiries.scailo_pb.ts:699

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_enquiries.scailo_pb.ts:697

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesEnquiriesServiceItemUpdateRequest"``

#### Defined in

src/purchases_enquiries.scailo_pb.ts:698

## Methods

### clone

▸ **clone**(): [`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_enquiries.scailo_pb.ts:721

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md)

#### Defined in

src/purchases_enquiries.scailo_pb.ts:709

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md)

#### Defined in

src/purchases_enquiries.scailo_pb.ts:713

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceItemUpdateRequest`](PurchasesEnquiriesServiceItemUpdateRequest.md)

#### Defined in

src/purchases_enquiries.scailo_pb.ts:717
