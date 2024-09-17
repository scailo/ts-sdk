[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServiceCreateRequest

# Class: QuotationsRequestsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.QuotationsRequestsServiceCreateRequest

## Hierarchy

- `Message`\<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\>

  ↳ **`QuotationsRequestsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsServiceCreateRequest.md#constructor)

### Properties

- [currencyId](QuotationsRequestsServiceCreateRequest.md#currencyid)
- [description](QuotationsRequestsServiceCreateRequest.md#description)
- [entityUuid](QuotationsRequestsServiceCreateRequest.md#entityuuid)
- [formData](QuotationsRequestsServiceCreateRequest.md#formdata)
- [lastDate](QuotationsRequestsServiceCreateRequest.md#lastdate)
- [priority](QuotationsRequestsServiceCreateRequest.md#priority)
- [purchaseEnquiryId](QuotationsRequestsServiceCreateRequest.md#purchaseenquiryid)
- [referenceId](QuotationsRequestsServiceCreateRequest.md#referenceid)
- [renewalPeriod](QuotationsRequestsServiceCreateRequest.md#renewalperiod)
- [userComment](QuotationsRequestsServiceCreateRequest.md#usercomment)
- [vaultFolderId](QuotationsRequestsServiceCreateRequest.md#vaultfolderid)
- [fields](QuotationsRequestsServiceCreateRequest.md#fields)
- [runtime](QuotationsRequestsServiceCreateRequest.md#runtime)
- [typeName](QuotationsRequestsServiceCreateRequest.md#typename)

### Methods

- [clone](QuotationsRequestsServiceCreateRequest.md#clone)
- [equals](QuotationsRequestsServiceCreateRequest.md#equals)
- [fromBinary](QuotationsRequestsServiceCreateRequest.md#frombinary)
- [fromJson](QuotationsRequestsServiceCreateRequest.md#fromjson)
- [fromJsonString](QuotationsRequestsServiceCreateRequest.md#fromjsonstring)
- [getType](QuotationsRequestsServiceCreateRequest.md#gettype)
- [toBinary](QuotationsRequestsServiceCreateRequest.md#tobinary)
- [toJSON](QuotationsRequestsServiceCreateRequest.md#tojson)
- [toJson](QuotationsRequestsServiceCreateRequest.md#tojson-1)
- [toJsonString](QuotationsRequestsServiceCreateRequest.md#tojsonstring)
- [equals](QuotationsRequestsServiceCreateRequest.md#equals-1)
- [fromBinary](QuotationsRequestsServiceCreateRequest.md#frombinary-1)
- [fromJson](QuotationsRequestsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](QuotationsRequestsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsServiceCreateRequest**(`data?`): [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\> |

#### Returns

[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Overrides

Message\&lt;QuotationsRequestsServiceCreateRequest\&gt;.constructor

#### Defined in

src/quotations_requests.scailo_pb.ts:312

## Properties

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

src/quotations_requests.scailo_pb.ts:282

___

### description

• **description**: `string` = `""`

The description of the quotation request

**`Generated`**

from field: string description = 17;

#### Defined in

src/quotations_requests.scailo_pb.ts:303

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/quotations_requests.scailo_pb.ts:240

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/quotations_requests.scailo_pb.ts:310

___

### lastDate

• **lastDate**: `string` = `""`

The date until which quotations responses can be sent

**`Generated`**

from field: string last_date = 13;

#### Defined in

src/quotations_requests.scailo_pb.ts:275

___

### priority

• **priority**: `string` = `""`

The priority of the quotation request. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 16;

#### Defined in

src/quotations_requests.scailo_pb.ts:296

___

### purchaseEnquiryId

• **purchaseEnquiryId**: `bigint` = `protoInt64.zero`

The associated purchase enquiry

**`Generated`**

from field: uint64 purchase_enquiry_id = 12;

#### Defined in

src/quotations_requests.scailo_pb.ts:268

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the quotation request

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/quotations_requests.scailo_pb.ts:261

___

### renewalPeriod

• **renewalPeriod**: `bigint` = `protoInt64.zero`

The number of days until which the quotation request is valid

**`Generated`**

from field: uint64 renewal_period = 15;

#### Defined in

src/quotations_requests.scailo_pb.ts:289

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/quotations_requests.scailo_pb.ts:247

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/quotations_requests.scailo_pb.ts:254

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/quotations_requests.scailo_pb.ts:319

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/quotations_requests.scailo_pb.ts:317

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsRequestsServiceCreateRequest"``

#### Defined in

src/quotations_requests.scailo_pb.ts:318

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md) \| `PlainMessage`\<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md) \| `PlainMessage`\<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md) \| `PlainMessage`\<[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/quotations_requests.scailo_pb.ts:345

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:333

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:337

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceCreateRequest`](QuotationsRequestsServiceCreateRequest.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:341
