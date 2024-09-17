[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsServiceCreateRequest

# Class: GoodsReceiptsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.GoodsReceiptsServiceCreateRequest

## Hierarchy

- `Message`\<[`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md)\>

  ↳ **`GoodsReceiptsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsServiceCreateRequest.md#constructor)

### Properties

- [entityUuid](GoodsReceiptsServiceCreateRequest.md#entityuuid)
- [formData](GoodsReceiptsServiceCreateRequest.md#formdata)
- [refFrom](GoodsReceiptsServiceCreateRequest.md#reffrom)
- [refId](GoodsReceiptsServiceCreateRequest.md#refid)
- [referenceId](GoodsReceiptsServiceCreateRequest.md#referenceid)
- [userComment](GoodsReceiptsServiceCreateRequest.md#usercomment)
- [vaultFolderId](GoodsReceiptsServiceCreateRequest.md#vaultfolderid)
- [vendorBillDate](GoodsReceiptsServiceCreateRequest.md#vendorbilldate)
- [vendorBillNo](GoodsReceiptsServiceCreateRequest.md#vendorbillno)
- [fields](GoodsReceiptsServiceCreateRequest.md#fields)
- [runtime](GoodsReceiptsServiceCreateRequest.md#runtime)
- [typeName](GoodsReceiptsServiceCreateRequest.md#typename)

### Methods

- [clone](GoodsReceiptsServiceCreateRequest.md#clone)
- [equals](GoodsReceiptsServiceCreateRequest.md#equals)
- [fromBinary](GoodsReceiptsServiceCreateRequest.md#frombinary)
- [fromJson](GoodsReceiptsServiceCreateRequest.md#fromjson)
- [fromJsonString](GoodsReceiptsServiceCreateRequest.md#fromjsonstring)
- [getType](GoodsReceiptsServiceCreateRequest.md#gettype)
- [toBinary](GoodsReceiptsServiceCreateRequest.md#tobinary)
- [toJSON](GoodsReceiptsServiceCreateRequest.md#tojson)
- [toJson](GoodsReceiptsServiceCreateRequest.md#tojson-1)
- [toJsonString](GoodsReceiptsServiceCreateRequest.md#tojsonstring)
- [equals](GoodsReceiptsServiceCreateRequest.md#equals-1)
- [fromBinary](GoodsReceiptsServiceCreateRequest.md#frombinary-1)
- [fromJson](GoodsReceiptsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](GoodsReceiptsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsServiceCreateRequest**(`data?`): [`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md)\> |

#### Returns

[`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md)

#### Overrides

Message\&lt;GoodsReceiptsServiceCreateRequest\&gt;.constructor

#### Defined in

src/goods_receipts.scailo_pb.ts:341

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/goods_receipts.scailo_pb.ts:283

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/goods_receipts.scailo_pb.ts:339

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

src/goods_receipts.scailo_pb.ts:311

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/goods_receipts.scailo_pb.ts:318

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the goods receipt

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/goods_receipts.scailo_pb.ts:304

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/goods_receipts.scailo_pb.ts:290

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/goods_receipts.scailo_pb.ts:297

___

### vendorBillDate

• **vendorBillDate**: `string` = `""`

The date on which the bill was raised by the vendor

**`Generated`**

from field: string vendor_bill_date = 15;

#### Defined in

src/goods_receipts.scailo_pb.ts:332

___

### vendorBillNo

• **vendorBillNo**: `string` = `""`

The vendor's bill number

**`Generated`**

from field: string vendor_bill_no = 14;

#### Defined in

src/goods_receipts.scailo_pb.ts:325

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/goods_receipts.scailo_pb.ts:348

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/goods_receipts.scailo_pb.ts:346

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsReceiptsServiceCreateRequest"``

#### Defined in

src/goods_receipts.scailo_pb.ts:347

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md) \| `PlainMessage`\<[`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md) \| `PlainMessage`\<[`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md) \| `PlainMessage`\<[`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/goods_receipts.scailo_pb.ts:372

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:360

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:364

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceCreateRequest`](GoodsReceiptsServiceCreateRequest.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:368
