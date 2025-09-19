[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceItemUpdateRequest

# Class: SalesEnquiriesServiceItemUpdateRequest

Describes the parameters required to update an item in a sales enquiry

**`Generated`**

from message Scailo.SalesEnquiriesServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\>

  ↳ **`SalesEnquiriesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceItemUpdateRequest.md#constructor)

### Properties

- [deliveryDate](SalesEnquiriesServiceItemUpdateRequest.md#deliverydate)
- [discount](SalesEnquiriesServiceItemUpdateRequest.md#discount)
- [id](SalesEnquiriesServiceItemUpdateRequest.md#id)
- [internalQuantity](SalesEnquiriesServiceItemUpdateRequest.md#internalquantity)
- [name](SalesEnquiriesServiceItemUpdateRequest.md#name)
- [roundOff](SalesEnquiriesServiceItemUpdateRequest.md#roundoff)
- [specifications](SalesEnquiriesServiceItemUpdateRequest.md#specifications)
- [taxGroupId](SalesEnquiriesServiceItemUpdateRequest.md#taxgroupid)
- [unitPrice](SalesEnquiriesServiceItemUpdateRequest.md#unitprice)
- [uomId](SalesEnquiriesServiceItemUpdateRequest.md#uomid)
- [userComment](SalesEnquiriesServiceItemUpdateRequest.md#usercomment)
- [fields](SalesEnquiriesServiceItemUpdateRequest.md#fields)
- [runtime](SalesEnquiriesServiceItemUpdateRequest.md#runtime)
- [typeName](SalesEnquiriesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](SalesEnquiriesServiceItemUpdateRequest.md#clone)
- [equals](SalesEnquiriesServiceItemUpdateRequest.md#equals)
- [fromBinary](SalesEnquiriesServiceItemUpdateRequest.md#frombinary)
- [fromJson](SalesEnquiriesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](SalesEnquiriesServiceItemUpdateRequest.md#gettype)
- [toBinary](SalesEnquiriesServiceItemUpdateRequest.md#tobinary)
- [toJSON](SalesEnquiriesServiceItemUpdateRequest.md#tojson)
- [toJson](SalesEnquiriesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceItemUpdateRequest.md#tojsonstring)
- [equals](SalesEnquiriesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](SalesEnquiriesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceItemUpdateRequest**(`data?`): [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\> |

#### Returns

[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;SalesEnquiriesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1010](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1010)

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date

**`Generated`**

from field: string delivery_date = 18;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1001](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1001)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 15;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:980](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L980)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:945](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L945)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity being offered (in cents)

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:959](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L959)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:952](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L952)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The round off (in cents) (both positive and negative values are allowed)

**`Generated`**

from field: int64 round_off = 17;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:994](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L994)

___

### specifications

• **specifications**: `string` = `""`

The specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1008](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1008)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:987](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L987)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price

**`Generated`**

from field: uint64 unit_price = 14;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:973](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L973)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: uint64 uom_id = 13;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:966](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L966)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:938](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L938)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1017](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1017)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1015](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1015)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiriesServiceItemUpdateRequest"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1016](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1016)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1043](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1043)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1031](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1031)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1035](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1035)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1039](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_enquiries.scailo_pb.ts#L1039)
