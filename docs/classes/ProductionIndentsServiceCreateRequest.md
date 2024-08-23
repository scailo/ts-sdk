[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentsServiceCreateRequest

# Class: ProductionIndentsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.ProductionIndentsServiceCreateRequest

## Hierarchy

- `Message`\<[`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md)\>

  ↳ **`ProductionIndentsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ProductionIndentsServiceCreateRequest.md#constructor)

### Properties

- [entityUuid](ProductionIndentsServiceCreateRequest.md#entityuuid)
- [formData](ProductionIndentsServiceCreateRequest.md#formdata)
- [indentRefFor](ProductionIndentsServiceCreateRequest.md#indentreffor)
- [indentRefId](ProductionIndentsServiceCreateRequest.md#indentrefid)
- [locationId](ProductionIndentsServiceCreateRequest.md#locationid)
- [productionRefFor](ProductionIndentsServiceCreateRequest.md#productionreffor)
- [productionRefId](ProductionIndentsServiceCreateRequest.md#productionrefid)
- [referenceId](ProductionIndentsServiceCreateRequest.md#referenceid)
- [supervisor](ProductionIndentsServiceCreateRequest.md#supervisor)
- [userComment](ProductionIndentsServiceCreateRequest.md#usercomment)
- [vaultFolderId](ProductionIndentsServiceCreateRequest.md#vaultfolderid)
- [fields](ProductionIndentsServiceCreateRequest.md#fields)
- [runtime](ProductionIndentsServiceCreateRequest.md#runtime)
- [typeName](ProductionIndentsServiceCreateRequest.md#typename)

### Methods

- [clone](ProductionIndentsServiceCreateRequest.md#clone)
- [equals](ProductionIndentsServiceCreateRequest.md#equals)
- [fromBinary](ProductionIndentsServiceCreateRequest.md#frombinary)
- [fromJson](ProductionIndentsServiceCreateRequest.md#fromjson)
- [fromJsonString](ProductionIndentsServiceCreateRequest.md#fromjsonstring)
- [getType](ProductionIndentsServiceCreateRequest.md#gettype)
- [toBinary](ProductionIndentsServiceCreateRequest.md#tobinary)
- [toJSON](ProductionIndentsServiceCreateRequest.md#tojson)
- [toJson](ProductionIndentsServiceCreateRequest.md#tojson-1)
- [toJsonString](ProductionIndentsServiceCreateRequest.md#tojsonstring)
- [equals](ProductionIndentsServiceCreateRequest.md#equals-1)
- [fromBinary](ProductionIndentsServiceCreateRequest.md#frombinary-1)
- [fromJson](ProductionIndentsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ProductionIndentsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentsServiceCreateRequest**(`data?`): [`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md)\> |

#### Returns

[`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md)

#### Overrides

Message\&lt;ProductionIndentsServiceCreateRequest\&gt;.constructor

#### Defined in

src/production_indents.scailo_pb.ts:296

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/production_indents.scailo_pb.ts:224

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/production_indents.scailo_pb.ts:294

___

### indentRefFor

• **indentRefFor**: `string` = `""`

Stores if the indent should be created on the basis of a work order or a family

**`Generated`**

from field: string indent_ref_for = 18;

#### Defined in

src/production_indents.scailo_pb.ts:280

___

### indentRefId

• **indentRefId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family or work order

**`Generated`**

from field: uint64 indent_ref_id = 19;

#### Defined in

src/production_indents.scailo_pb.ts:287

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 14;

#### Defined in

src/production_indents.scailo_pb.ts:252

___

### productionRefFor

• **productionRefFor**: `string` = `""`

Stores if the indent is associated to a production plan

**`Generated`**

from field: string production_ref_for = 16;

#### Defined in

src/production_indents.scailo_pb.ts:266

___

### productionRefId

• **productionRefId**: `bigint` = `protoInt64.zero`

Stores the production plan ID if production_ref_for is production-plan

**`Generated`**

from field: uint64 production_ref_id = 17;

#### Defined in

src/production_indents.scailo_pb.ts:273

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the production indent

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/production_indents.scailo_pb.ts:245

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 15;

#### Defined in

src/production_indents.scailo_pb.ts:259

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/production_indents.scailo_pb.ts:231

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/production_indents.scailo_pb.ts:238

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_indents.scailo_pb.ts:303

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_indents.scailo_pb.ts:301

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionIndentsServiceCreateRequest"``

#### Defined in

src/production_indents.scailo_pb.ts:302

## Methods

### clone

▸ **clone**(): [`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md) \| `PlainMessage`\<[`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md) \| `PlainMessage`\<[`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md) \| `PlainMessage`\<[`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/production_indents.scailo_pb.ts:329

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md)

#### Defined in

src/production_indents.scailo_pb.ts:317

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md)

#### Defined in

src/production_indents.scailo_pb.ts:321

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceCreateRequest`](ProductionIndentsServiceCreateRequest.md)

#### Defined in

src/production_indents.scailo_pb.ts:325
