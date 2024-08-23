[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceCreateRequest

# Class: SalesEnquiriesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.SalesEnquiriesServiceCreateRequest

## Hierarchy

- `Message`\<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\>

  ↳ **`SalesEnquiriesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceCreateRequest.md#constructor)

### Properties

- [buyerClientId](SalesEnquiriesServiceCreateRequest.md#buyerclientid)
- [consigneeClientId](SalesEnquiriesServiceCreateRequest.md#consigneeclientid)
- [currencyId](SalesEnquiriesServiceCreateRequest.md#currencyid)
- [description](SalesEnquiriesServiceCreateRequest.md#description)
- [entityUuid](SalesEnquiriesServiceCreateRequest.md#entityuuid)
- [formData](SalesEnquiriesServiceCreateRequest.md#formdata)
- [miscellaneousCost](SalesEnquiriesServiceCreateRequest.md#miscellaneouscost)
- [overallDiscount](SalesEnquiriesServiceCreateRequest.md#overalldiscount)
- [priority](SalesEnquiriesServiceCreateRequest.md#priority)
- [referenceId](SalesEnquiriesServiceCreateRequest.md#referenceid)
- [roundOff](SalesEnquiriesServiceCreateRequest.md#roundoff)
- [userComment](SalesEnquiriesServiceCreateRequest.md#usercomment)
- [vaultFolderId](SalesEnquiriesServiceCreateRequest.md#vaultfolderid)
- [fields](SalesEnquiriesServiceCreateRequest.md#fields)
- [runtime](SalesEnquiriesServiceCreateRequest.md#runtime)
- [typeName](SalesEnquiriesServiceCreateRequest.md#typename)

### Methods

- [clone](SalesEnquiriesServiceCreateRequest.md#clone)
- [equals](SalesEnquiriesServiceCreateRequest.md#equals)
- [fromBinary](SalesEnquiriesServiceCreateRequest.md#frombinary)
- [fromJson](SalesEnquiriesServiceCreateRequest.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceCreateRequest.md#fromjsonstring)
- [getType](SalesEnquiriesServiceCreateRequest.md#gettype)
- [toBinary](SalesEnquiriesServiceCreateRequest.md#tobinary)
- [toJSON](SalesEnquiriesServiceCreateRequest.md#tojson)
- [toJson](SalesEnquiriesServiceCreateRequest.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceCreateRequest.md#tojsonstring)
- [equals](SalesEnquiriesServiceCreateRequest.md#equals-1)
- [fromBinary](SalesEnquiriesServiceCreateRequest.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceCreateRequest**(`data?`): [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\> |

#### Returns

[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Overrides

Message\&lt;SalesEnquiriesServiceCreateRequest\&gt;.constructor

#### Defined in

src/sales_enquiries.scailo_pb.ts:358

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer

**`Generated`**

from field: uint64 buyer_client_id = 13;

#### Defined in

src/sales_enquiries.scailo_pb.ts:307

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee

**`Generated`**

from field: uint64 consignee_client_id = 12;

#### Defined in

src/sales_enquiries.scailo_pb.ts:300

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the currency

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

src/sales_enquiries.scailo_pb.ts:321

___

### description

• **description**: `string` = `""`

The description of the sales enquiry

**`Generated`**

from field: string description = 16;

#### Defined in

src/sales_enquiries.scailo_pb.ts:328

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/sales_enquiries.scailo_pb.ts:272

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/sales_enquiries.scailo_pb.ts:356

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

The miscellaneous cost (in cents)

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

src/sales_enquiries.scailo_pb.ts:335

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The overall discount (in cents)

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

src/sales_enquiries.scailo_pb.ts:342

___

### priority

• **priority**: `string` = `""`

The priority of the sales enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 14;

#### Defined in

src/sales_enquiries.scailo_pb.ts:314

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales enquiry

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/sales_enquiries.scailo_pb.ts:293

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The round off amount (in cents) (both positive and negative values are allowed)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

src/sales_enquiries.scailo_pb.ts:349

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/sales_enquiries.scailo_pb.ts:279

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/sales_enquiries.scailo_pb.ts:286

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_enquiries.scailo_pb.ts:365

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_enquiries.scailo_pb.ts:363

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiriesServiceCreateRequest"``

#### Defined in

src/sales_enquiries.scailo_pb.ts:364

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_enquiries.scailo_pb.ts:393

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Defined in

src/sales_enquiries.scailo_pb.ts:381

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Defined in

src/sales_enquiries.scailo_pb.ts:385

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceCreateRequest`](SalesEnquiriesServiceCreateRequest.md)

#### Defined in

src/sales_enquiries.scailo_pb.ts:389
