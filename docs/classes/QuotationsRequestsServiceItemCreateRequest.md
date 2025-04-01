[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServiceItemCreateRequest

# Class: QuotationsRequestsServiceItemCreateRequest

Describes the parameters required to add an item to a quotation request

**`Generated`**

from message Scailo.QuotationsRequestsServiceItemCreateRequest

## Hierarchy

- `Message`\<[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)\>

  ↳ **`QuotationsRequestsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsServiceItemCreateRequest.md#constructor)

### Properties

- [baselinePrice](QuotationsRequestsServiceItemCreateRequest.md#baselineprice)
- [deliveryDate](QuotationsRequestsServiceItemCreateRequest.md#deliverydate)
- [hsnSacCode](QuotationsRequestsServiceItemCreateRequest.md#hsnsaccode)
- [name](QuotationsRequestsServiceItemCreateRequest.md#name)
- [quantity](QuotationsRequestsServiceItemCreateRequest.md#quantity)
- [quotationRequestId](QuotationsRequestsServiceItemCreateRequest.md#quotationrequestid)
- [specifications](QuotationsRequestsServiceItemCreateRequest.md#specifications)
- [uomId](QuotationsRequestsServiceItemCreateRequest.md#uomid)
- [userComment](QuotationsRequestsServiceItemCreateRequest.md#usercomment)
- [vaultFolderId](QuotationsRequestsServiceItemCreateRequest.md#vaultfolderid)
- [fields](QuotationsRequestsServiceItemCreateRequest.md#fields)
- [runtime](QuotationsRequestsServiceItemCreateRequest.md#runtime)
- [typeName](QuotationsRequestsServiceItemCreateRequest.md#typename)

### Methods

- [clone](QuotationsRequestsServiceItemCreateRequest.md#clone)
- [equals](QuotationsRequestsServiceItemCreateRequest.md#equals)
- [fromBinary](QuotationsRequestsServiceItemCreateRequest.md#frombinary)
- [fromJson](QuotationsRequestsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](QuotationsRequestsServiceItemCreateRequest.md#fromjsonstring)
- [getType](QuotationsRequestsServiceItemCreateRequest.md#gettype)
- [toBinary](QuotationsRequestsServiceItemCreateRequest.md#tobinary)
- [toJSON](QuotationsRequestsServiceItemCreateRequest.md#tojson)
- [toJson](QuotationsRequestsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](QuotationsRequestsServiceItemCreateRequest.md#tojsonstring)
- [equals](QuotationsRequestsServiceItemCreateRequest.md#equals-1)
- [fromBinary](QuotationsRequestsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](QuotationsRequestsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](QuotationsRequestsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsServiceItemCreateRequest**(`data?`): [`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)\> |

#### Returns

[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

#### Overrides

Message\&lt;QuotationsRequestsServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/quotations_requests.scailo_pb.ts:827

## Properties

### baselinePrice

• **baselinePrice**: `bigint` = `protoInt64.zero`

The min price (in cents)

**`Generated`**

from field: uint64 baseline_price = 13;

#### Defined in

src/quotations_requests.scailo_pb.ts:797

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date

**`Generated`**

from field: string delivery_date = 16;

#### Defined in

src/quotations_requests.scailo_pb.ts:818

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

Stores the HSN/SAC code of the item

**`Generated`**

from field: string hsn_sac_code = 12;

#### Defined in

src/quotations_requests.scailo_pb.ts:790

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

src/quotations_requests.scailo_pb.ts:783

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity required (in cents)

**`Generated`**

from field: uint64 quantity = 14;

#### Defined in

src/quotations_requests.scailo_pb.ts:804

___

### quotationRequestId

• **quotationRequestId**: `bigint` = `protoInt64.zero`

Stores the quotation request ID

**`Generated`**

from field: uint64 quotation_request_id = 10;

#### Defined in

src/quotations_requests.scailo_pb.ts:776

___

### specifications

• **specifications**: `string` = `""`

The specifications of the item

**`Generated`**

from field: string specifications = 17;

#### Defined in

src/quotations_requests.scailo_pb.ts:825

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: uint64 uom_id = 15;

#### Defined in

src/quotations_requests.scailo_pb.ts:811

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/quotations_requests.scailo_pb.ts:762

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/quotations_requests.scailo_pb.ts:769

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/quotations_requests.scailo_pb.ts:834

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/quotations_requests.scailo_pb.ts:832

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsRequestsServiceItemCreateRequest"``

#### Defined in

src/quotations_requests.scailo_pb.ts:833

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md) \| `PlainMessage`\<[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md) \| `PlainMessage`\<[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md) \| `PlainMessage`\<[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/quotations_requests.scailo_pb.ts:859

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:847

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:851

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:855
