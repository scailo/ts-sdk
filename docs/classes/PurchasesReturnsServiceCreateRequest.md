[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesReturnsServiceCreateRequest

# Class: PurchasesReturnsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.PurchasesReturnsServiceCreateRequest

## Hierarchy

- `Message`\<[`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md)\>

  ↳ **`PurchasesReturnsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesReturnsServiceCreateRequest.md#constructor)

### Properties

- [entityUuid](PurchasesReturnsServiceCreateRequest.md#entityuuid)
- [formData](PurchasesReturnsServiceCreateRequest.md#formdata)
- [locationId](PurchasesReturnsServiceCreateRequest.md#locationid)
- [refFrom](PurchasesReturnsServiceCreateRequest.md#reffrom)
- [refId](PurchasesReturnsServiceCreateRequest.md#refid)
- [referenceId](PurchasesReturnsServiceCreateRequest.md#referenceid)
- [userComment](PurchasesReturnsServiceCreateRequest.md#usercomment)
- [vaultFolderId](PurchasesReturnsServiceCreateRequest.md#vaultfolderid)
- [fields](PurchasesReturnsServiceCreateRequest.md#fields)
- [runtime](PurchasesReturnsServiceCreateRequest.md#runtime)
- [typeName](PurchasesReturnsServiceCreateRequest.md#typename)

### Methods

- [clone](PurchasesReturnsServiceCreateRequest.md#clone)
- [equals](PurchasesReturnsServiceCreateRequest.md#equals)
- [fromBinary](PurchasesReturnsServiceCreateRequest.md#frombinary)
- [fromJson](PurchasesReturnsServiceCreateRequest.md#fromjson)
- [fromJsonString](PurchasesReturnsServiceCreateRequest.md#fromjsonstring)
- [getType](PurchasesReturnsServiceCreateRequest.md#gettype)
- [toBinary](PurchasesReturnsServiceCreateRequest.md#tobinary)
- [toJSON](PurchasesReturnsServiceCreateRequest.md#tojson)
- [toJson](PurchasesReturnsServiceCreateRequest.md#tojson-1)
- [toJsonString](PurchasesReturnsServiceCreateRequest.md#tojsonstring)
- [equals](PurchasesReturnsServiceCreateRequest.md#equals-1)
- [fromBinary](PurchasesReturnsServiceCreateRequest.md#frombinary-1)
- [fromJson](PurchasesReturnsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](PurchasesReturnsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesReturnsServiceCreateRequest**(`data?`): [`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md)\> |

#### Returns

[`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md)

#### Overrides

Message\&lt;PurchasesReturnsServiceCreateRequest\&gt;.constructor

#### Defined in

src/purchases_returns.scailo_pb.ts:345

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/purchases_returns.scailo_pb.ts:294

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/purchases_returns.scailo_pb.ts:343

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

src/purchases_returns.scailo_pb.ts:336

___

### refFrom

• **refFrom**: [`PURCHASE_RETURN_REF_FROM`](../enums/PURCHASE_RETURN_REF_FROM.md) = `PURCHASE_RETURN_REF_FROM.PURCHASE_RETURN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.PURCHASE_RETURN_REF_FROM ref_from = 12;

#### Defined in

src/purchases_returns.scailo_pb.ts:322

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

src/purchases_returns.scailo_pb.ts:329

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase return

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/purchases_returns.scailo_pb.ts:315

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/purchases_returns.scailo_pb.ts:301

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/purchases_returns.scailo_pb.ts:308

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_returns.scailo_pb.ts:352

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_returns.scailo_pb.ts:350

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesReturnsServiceCreateRequest"``

#### Defined in

src/purchases_returns.scailo_pb.ts:351

## Methods

### clone

▸ **clone**(): [`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md) \| `PlainMessage`\<[`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md) \| `PlainMessage`\<[`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md) \| `PlainMessage`\<[`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_returns.scailo_pb.ts:375

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:363

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:367

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceCreateRequest`](PurchasesReturnsServiceCreateRequest.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:371
