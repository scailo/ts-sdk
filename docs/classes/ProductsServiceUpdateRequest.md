[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductsServiceUpdateRequest

# Class: ProductsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.ProductsServiceUpdateRequest

## Hierarchy

- `Message`\<[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)\>

  ↳ **`ProductsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ProductsServiceUpdateRequest.md#constructor)

### Properties

- [description](ProductsServiceUpdateRequest.md#description)
- [id](ProductsServiceUpdateRequest.md#id)
- [internalItemCode](ProductsServiceUpdateRequest.md#internalitemcode)
- [isQcReportPublic](ProductsServiceUpdateRequest.md#isqcreportpublic)
- [notifyUsers](ProductsServiceUpdateRequest.md#notifyusers)
- [remainingDimensions](ProductsServiceUpdateRequest.md#remainingdimensions)
- [secondaryQuantity](ProductsServiceUpdateRequest.md#secondaryquantity)
- [secondaryUomId](ProductsServiceUpdateRequest.md#secondaryuomid)
- [shelfLifeTimestamp](ProductsServiceUpdateRequest.md#shelflifetimestamp)
- [storageId](ProductsServiceUpdateRequest.md#storageid)
- [userComment](ProductsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](ProductsServiceUpdateRequest.md#vaultfolderid)
- [warrantyTimestamp](ProductsServiceUpdateRequest.md#warrantytimestamp)
- [fields](ProductsServiceUpdateRequest.md#fields)
- [runtime](ProductsServiceUpdateRequest.md#runtime)
- [typeName](ProductsServiceUpdateRequest.md#typename)

### Methods

- [clone](ProductsServiceUpdateRequest.md#clone)
- [equals](ProductsServiceUpdateRequest.md#equals)
- [fromBinary](ProductsServiceUpdateRequest.md#frombinary)
- [fromJson](ProductsServiceUpdateRequest.md#fromjson)
- [fromJsonString](ProductsServiceUpdateRequest.md#fromjsonstring)
- [getType](ProductsServiceUpdateRequest.md#gettype)
- [toBinary](ProductsServiceUpdateRequest.md#tobinary)
- [toJSON](ProductsServiceUpdateRequest.md#tojson)
- [toJson](ProductsServiceUpdateRequest.md#tojson-1)
- [toJsonString](ProductsServiceUpdateRequest.md#tojsonstring)
- [equals](ProductsServiceUpdateRequest.md#equals-1)
- [fromBinary](ProductsServiceUpdateRequest.md#frombinary-1)
- [fromJson](ProductsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ProductsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductsServiceUpdateRequest**(`data?`): [`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)\> |

#### Returns

[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

#### Overrides

Message\&lt;ProductsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/products.scailo_pb.ts:289](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L289)

## Properties

### description

• **description**: `string` = `""`

The description of the product

**`Generated`**

from field: string description = 60;

#### Defined in

[src/products.scailo_pb.ts:287](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L287)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/products.scailo_pb.ts:210](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L210)

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

[src/products.scailo_pb.ts:231](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L231)

___

### isQcReportPublic

• **isQcReportPublic**: `boolean` = `false`

Stores if the associated QC report should be public

**`Generated`**

from field: bool is_qc_report_public = 52;

#### Defined in

[src/products.scailo_pb.ts:273](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L273)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/products.scailo_pb.ts:217](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L217)

___

### remainingDimensions

• **remainingDimensions**: `string` = `""`

Stores any applicable remaining dimensions as a string

**`Generated`**

from field: string remaining_dimensions = 55;

#### Defined in

[src/products.scailo_pb.ts:280](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L280)

___

### secondaryQuantity

• **secondaryQuantity**: `bigint` = `protoInt64.zero`

Stores an optional quantity in the secondary unit of product

**`Generated`**

from field: uint64 secondary_quantity = 39;

#### Defined in

[src/products.scailo_pb.ts:245](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L245)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of product

**`Generated`**

from field: uint64 secondary_uom_id = 38;

#### Defined in

[src/products.scailo_pb.ts:238](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L238)

___

### shelfLifeTimestamp

• **shelfLifeTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional shelf life as a timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp = 40;

#### Defined in

[src/products.scailo_pb.ts:252](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L252)

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the product is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

[src/products.scailo_pb.ts:266](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L266)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/products.scailo_pb.ts:203](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L203)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 18;

#### Defined in

[src/products.scailo_pb.ts:224](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L224)

___

### warrantyTimestamp

• **warrantyTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional warranty as a timestamp

**`Generated`**

from field: uint64 warranty_timestamp = 41;

#### Defined in

[src/products.scailo_pb.ts:259](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L259)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/products.scailo_pb.ts:296](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L296)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/products.scailo_pb.ts:294](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L294)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductsServiceUpdateRequest"``

#### Defined in

[src/products.scailo_pb.ts:295](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L295)

## Methods

### clone

▸ **clone**(): [`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md) \| `PlainMessage`\<[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md) \| `PlainMessage`\<[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md) \| `PlainMessage`\<[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/products.scailo_pb.ts:324](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L324)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

#### Defined in

[src/products.scailo_pb.ts:312](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L312)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

#### Defined in

[src/products.scailo_pb.ts:316](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L316)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceUpdateRequest`](ProductsServiceUpdateRequest.md)

#### Defined in

[src/products.scailo_pb.ts:320](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/products.scailo_pb.ts#L320)
