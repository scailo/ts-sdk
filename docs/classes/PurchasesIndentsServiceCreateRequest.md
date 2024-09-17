[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServiceCreateRequest

# Class: PurchasesIndentsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.PurchasesIndentsServiceCreateRequest

## Hierarchy

- `Message`\<[`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md)\>

  ↳ **`PurchasesIndentsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServiceCreateRequest.md#constructor)

### Properties

- [consigneeLocationId](PurchasesIndentsServiceCreateRequest.md#consigneelocationid)
- [entityUuid](PurchasesIndentsServiceCreateRequest.md#entityuuid)
- [formData](PurchasesIndentsServiceCreateRequest.md#formdata)
- [referenceId](PurchasesIndentsServiceCreateRequest.md#referenceid)
- [userComment](PurchasesIndentsServiceCreateRequest.md#usercomment)
- [vaultFolderId](PurchasesIndentsServiceCreateRequest.md#vaultfolderid)
- [fields](PurchasesIndentsServiceCreateRequest.md#fields)
- [runtime](PurchasesIndentsServiceCreateRequest.md#runtime)
- [typeName](PurchasesIndentsServiceCreateRequest.md#typename)

### Methods

- [clone](PurchasesIndentsServiceCreateRequest.md#clone)
- [equals](PurchasesIndentsServiceCreateRequest.md#equals)
- [fromBinary](PurchasesIndentsServiceCreateRequest.md#frombinary)
- [fromJson](PurchasesIndentsServiceCreateRequest.md#fromjson)
- [fromJsonString](PurchasesIndentsServiceCreateRequest.md#fromjsonstring)
- [getType](PurchasesIndentsServiceCreateRequest.md#gettype)
- [toBinary](PurchasesIndentsServiceCreateRequest.md#tobinary)
- [toJSON](PurchasesIndentsServiceCreateRequest.md#tojson)
- [toJson](PurchasesIndentsServiceCreateRequest.md#tojson-1)
- [toJsonString](PurchasesIndentsServiceCreateRequest.md#tojsonstring)
- [equals](PurchasesIndentsServiceCreateRequest.md#equals-1)
- [fromBinary](PurchasesIndentsServiceCreateRequest.md#frombinary-1)
- [fromJson](PurchasesIndentsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServiceCreateRequest**(`data?`): [`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md)\> |

#### Returns

[`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md)

#### Overrides

Message\&lt;PurchasesIndentsServiceCreateRequest\&gt;.constructor

#### Defined in

src/purchases_indents.scailo_pb.ts:269

## Properties

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 consignee_location_id = 12;

#### Defined in

src/purchases_indents.scailo_pb.ts:260

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/purchases_indents.scailo_pb.ts:232

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/purchases_indents.scailo_pb.ts:267

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase indent

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/purchases_indents.scailo_pb.ts:253

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/purchases_indents.scailo_pb.ts:239

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/purchases_indents.scailo_pb.ts:246

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_indents.scailo_pb.ts:276

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_indents.scailo_pb.ts:274

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesIndentsServiceCreateRequest"``

#### Defined in

src/purchases_indents.scailo_pb.ts:275

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md) \| `PlainMessage`\<[`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md) \| `PlainMessage`\<[`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md) \| `PlainMessage`\<[`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_indents.scailo_pb.ts:297

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:285

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:289

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceCreateRequest`](PurchasesIndentsServiceCreateRequest.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:293
