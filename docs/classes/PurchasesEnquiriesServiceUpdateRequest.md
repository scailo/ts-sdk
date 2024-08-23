[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesEnquiriesServiceUpdateRequest

# Class: PurchasesEnquiriesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.PurchasesEnquiriesServiceUpdateRequest

## Hierarchy

- `Message`\<[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)\>

  ↳ **`PurchasesEnquiriesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesEnquiriesServiceUpdateRequest.md#constructor)

### Properties

- [description](PurchasesEnquiriesServiceUpdateRequest.md#description)
- [formData](PurchasesEnquiriesServiceUpdateRequest.md#formdata)
- [id](PurchasesEnquiriesServiceUpdateRequest.md#id)
- [notifyUsers](PurchasesEnquiriesServiceUpdateRequest.md#notifyusers)
- [priority](PurchasesEnquiriesServiceUpdateRequest.md#priority)
- [referenceId](PurchasesEnquiriesServiceUpdateRequest.md#referenceid)
- [userComment](PurchasesEnquiriesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](PurchasesEnquiriesServiceUpdateRequest.md#vaultfolderid)
- [fields](PurchasesEnquiriesServiceUpdateRequest.md#fields)
- [runtime](PurchasesEnquiriesServiceUpdateRequest.md#runtime)
- [typeName](PurchasesEnquiriesServiceUpdateRequest.md#typename)

### Methods

- [clone](PurchasesEnquiriesServiceUpdateRequest.md#clone)
- [equals](PurchasesEnquiriesServiceUpdateRequest.md#equals)
- [fromBinary](PurchasesEnquiriesServiceUpdateRequest.md#frombinary)
- [fromJson](PurchasesEnquiriesServiceUpdateRequest.md#fromjson)
- [fromJsonString](PurchasesEnquiriesServiceUpdateRequest.md#fromjsonstring)
- [getType](PurchasesEnquiriesServiceUpdateRequest.md#gettype)
- [toBinary](PurchasesEnquiriesServiceUpdateRequest.md#tobinary)
- [toJSON](PurchasesEnquiriesServiceUpdateRequest.md#tojson)
- [toJson](PurchasesEnquiriesServiceUpdateRequest.md#tojson-1)
- [toJsonString](PurchasesEnquiriesServiceUpdateRequest.md#tojsonstring)
- [equals](PurchasesEnquiriesServiceUpdateRequest.md#equals-1)
- [fromBinary](PurchasesEnquiriesServiceUpdateRequest.md#frombinary-1)
- [fromJson](PurchasesEnquiriesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](PurchasesEnquiriesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesEnquiriesServiceUpdateRequest**(`data?`): [`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)\> |

#### Returns

[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

#### Overrides

Message\&lt;PurchasesEnquiriesServiceUpdateRequest\&gt;.constructor

#### Defined in

src/purchases_enquiries.scailo_pb.ts:373

## Properties

### description

• **description**: `string` = `""`

The description of the purchase enquiry

**`Generated`**

from field: string description = 16;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:364

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:371

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:329

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:336

___

### priority

• **priority**: `string` = `""`

The priority of the purchase enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 14;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:357

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase enquiry

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:350

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:322

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:343

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_enquiries.scailo_pb.ts:380

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_enquiries.scailo_pb.ts:378

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesEnquiriesServiceUpdateRequest"``

#### Defined in

src/purchases_enquiries.scailo_pb.ts:379

## Methods

### clone

▸ **clone**(): [`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_enquiries.scailo_pb.ts:403

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

#### Defined in

src/purchases_enquiries.scailo_pb.ts:391

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

#### Defined in

src/purchases_enquiries.scailo_pb.ts:395

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

#### Defined in

src/purchases_enquiries.scailo_pb.ts:399
