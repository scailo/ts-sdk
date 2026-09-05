[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InfrastructuresServiceCreateRequest

# Class: InfrastructuresServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.InfrastructuresServiceCreateRequest

## Hierarchy

- `Message`\<[`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md)\>

  ↳ **`InfrastructuresServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](InfrastructuresServiceCreateRequest.md#constructor)

### Properties

- [description](InfrastructuresServiceCreateRequest.md#description)
- [entityUuid](InfrastructuresServiceCreateRequest.md#entityuuid)
- [familyId](InfrastructuresServiceCreateRequest.md#familyid)
- [formData](InfrastructuresServiceCreateRequest.md#formdata)
- [internalItemCode](InfrastructuresServiceCreateRequest.md#internalitemcode)
- [locationId](InfrastructuresServiceCreateRequest.md#locationid)
- [quantity](InfrastructuresServiceCreateRequest.md#quantity)
- [refFrom](InfrastructuresServiceCreateRequest.md#reffrom)
- [refId](InfrastructuresServiceCreateRequest.md#refid)
- [secondaryQuantity](InfrastructuresServiceCreateRequest.md#secondaryquantity)
- [secondaryUomId](InfrastructuresServiceCreateRequest.md#secondaryuomid)
- [shelfLifeTimestamp](InfrastructuresServiceCreateRequest.md#shelflifetimestamp)
- [userComment](InfrastructuresServiceCreateRequest.md#usercomment)
- [vaultFolderId](InfrastructuresServiceCreateRequest.md#vaultfolderid)
- [warrantyTimestamp](InfrastructuresServiceCreateRequest.md#warrantytimestamp)
- [fields](InfrastructuresServiceCreateRequest.md#fields)
- [runtime](InfrastructuresServiceCreateRequest.md#runtime)
- [typeName](InfrastructuresServiceCreateRequest.md#typename)

### Methods

- [clone](InfrastructuresServiceCreateRequest.md#clone)
- [equals](InfrastructuresServiceCreateRequest.md#equals)
- [fromBinary](InfrastructuresServiceCreateRequest.md#frombinary)
- [fromJson](InfrastructuresServiceCreateRequest.md#fromjson)
- [fromJsonString](InfrastructuresServiceCreateRequest.md#fromjsonstring)
- [getType](InfrastructuresServiceCreateRequest.md#gettype)
- [toBinary](InfrastructuresServiceCreateRequest.md#tobinary)
- [toJSON](InfrastructuresServiceCreateRequest.md#tojson)
- [toJson](InfrastructuresServiceCreateRequest.md#tojson-1)
- [toJsonString](InfrastructuresServiceCreateRequest.md#tojsonstring)
- [equals](InfrastructuresServiceCreateRequest.md#equals-1)
- [fromBinary](InfrastructuresServiceCreateRequest.md#frombinary-1)
- [fromJson](InfrastructuresServiceCreateRequest.md#fromjson-1)
- [fromJsonString](InfrastructuresServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InfrastructuresServiceCreateRequest**(`data?`): [`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md)\> |

#### Returns

[`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md)

#### Overrides

Message\&lt;InfrastructuresServiceCreateRequest\&gt;.constructor

#### Defined in

[src/infrastructures.scailo_pb.ts:191](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L191)

## Properties

### description

• **description**: `string` = `""`

The description of the infrastructure

**`Generated`**

from field: string description = 60;

#### Defined in

[src/infrastructures.scailo_pb.ts:175](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L175)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/infrastructures.scailo_pb.ts:75](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L75)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

[src/infrastructures.scailo_pb.ts:119](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L119)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 80;

#### Defined in

[src/infrastructures.scailo_pb.ts:189](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L189)

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

[src/infrastructures.scailo_pb.ts:126](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L126)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the item needs to be stored

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

[src/infrastructures.scailo_pb.ts:168](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L168)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents)

**`Generated`**

from field: uint64 quantity = 37;

#### Defined in

[src/infrastructures.scailo_pb.ts:133](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L133)

___

### refFrom

• **refFrom**: [`INFRASTRUCTURE_REF_FROM`](../enums/INFRASTRUCTURE_REF_FROM.md) = `INFRASTRUCTURE_REF_FROM.INFRASTRUCTURE_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.INFRASTRUCTURE_REF_FROM ref_from = 31;

#### Defined in

[src/infrastructures.scailo_pb.ts:105](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L105)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

[src/infrastructures.scailo_pb.ts:112](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L112)

___

### secondaryQuantity

• **secondaryQuantity**: `bigint` = `protoInt64.zero`

Stores an optional quantity in the secondary unit of infrastructure

**`Generated`**

from field: uint64 secondary_quantity = 40;

#### Defined in

[src/infrastructures.scailo_pb.ts:147](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L147)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of infrastructure

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

[src/infrastructures.scailo_pb.ts:140](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L140)

___

### shelfLifeTimestamp

• **shelfLifeTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional shelf life as a timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp = 41;

#### Defined in

[src/infrastructures.scailo_pb.ts:154](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L154)

___

### userComment

• **userComment**: `string` = `""`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/infrastructures.scailo_pb.ts:91](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L91)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 18;

#### Defined in

[src/infrastructures.scailo_pb.ts:98](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L98)

___

### warrantyTimestamp

• **warrantyTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional warranty as a timestamp

**`Generated`**

from field: uint64 warranty_timestamp = 42;

#### Defined in

[src/infrastructures.scailo_pb.ts:161](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L161)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/infrastructures.scailo_pb.ts:198](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L198)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/infrastructures.scailo_pb.ts:196](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L196)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InfrastructuresServiceCreateRequest"``

#### Defined in

[src/infrastructures.scailo_pb.ts:197](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L197)

## Methods

### clone

▸ **clone**(): [`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md) \| `PlainMessage`\<[`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md) \| `PlainMessage`\<[`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md) \| `PlainMessage`\<[`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/infrastructures.scailo_pb.ts:228](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L228)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md)

#### Defined in

[src/infrastructures.scailo_pb.ts:216](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L216)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md)

#### Defined in

[src/infrastructures.scailo_pb.ts:220](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L220)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InfrastructuresServiceCreateRequest`](InfrastructuresServiceCreateRequest.md)

#### Defined in

[src/infrastructures.scailo_pb.ts:224](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/infrastructures.scailo_pb.ts#L224)
