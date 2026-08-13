[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceUpdateIdentityRequest

# Class: FamiliesServiceUpdateIdentityRequest

Request message for modifying the foundational identity and structural classification of an existing Family.
This payload specifically targets core attributes that define the record's base operational behavior—such as
the unique alphanumeric code, structural hierarchy (parent mapping and leaf status), and the primary family type.

**Critical Constraint:** Because these fields dictate core catalog integrity and transactional rules, consumers
must use this request strictly **prior to the first approval** of the family record. Once a family has been
approved, its identity attributes are permanently locked and cannot be mutated via this operation.

**Note:** This is typically utilized by Catalog Administrators or Inventory Managers during the initial onboarding,
draft, or review phases to correct structural mappings before finalizing the catalog entry.

**`Generated`**

from message Scailo.FamiliesServiceUpdateIdentityRequest

## Hierarchy

- `Message`\<[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)\>

  ↳ **`FamiliesServiceUpdateIdentityRequest`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceUpdateIdentityRequest.md#constructor)

### Properties

- [code](FamiliesServiceUpdateIdentityRequest.md#code)
- [familyType](FamiliesServiceUpdateIdentityRequest.md#familytype)
- [id](FamiliesServiceUpdateIdentityRequest.md#id)
- [isLeaf](FamiliesServiceUpdateIdentityRequest.md#isleaf)
- [parentId](FamiliesServiceUpdateIdentityRequest.md#parentid)
- [userComment](FamiliesServiceUpdateIdentityRequest.md#usercomment)
- [fields](FamiliesServiceUpdateIdentityRequest.md#fields)
- [runtime](FamiliesServiceUpdateIdentityRequest.md#runtime)
- [typeName](FamiliesServiceUpdateIdentityRequest.md#typename)

### Methods

- [clone](FamiliesServiceUpdateIdentityRequest.md#clone)
- [equals](FamiliesServiceUpdateIdentityRequest.md#equals)
- [fromBinary](FamiliesServiceUpdateIdentityRequest.md#frombinary)
- [fromJson](FamiliesServiceUpdateIdentityRequest.md#fromjson)
- [fromJsonString](FamiliesServiceUpdateIdentityRequest.md#fromjsonstring)
- [getType](FamiliesServiceUpdateIdentityRequest.md#gettype)
- [toBinary](FamiliesServiceUpdateIdentityRequest.md#tobinary)
- [toJSON](FamiliesServiceUpdateIdentityRequest.md#tojson)
- [toJson](FamiliesServiceUpdateIdentityRequest.md#tojson-1)
- [toJsonString](FamiliesServiceUpdateIdentityRequest.md#tojsonstring)
- [equals](FamiliesServiceUpdateIdentityRequest.md#equals-1)
- [fromBinary](FamiliesServiceUpdateIdentityRequest.md#frombinary-1)
- [fromJson](FamiliesServiceUpdateIdentityRequest.md#fromjson-1)
- [fromJsonString](FamiliesServiceUpdateIdentityRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServiceUpdateIdentityRequest**(`data?`): [`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)\> |

#### Returns

[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

#### Overrides

Message\&lt;FamiliesServiceUpdateIdentityRequest\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:1083](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L1083)

## Properties

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique alphanumeric code used to internally classify and represent the family. Can be updated only prior to the first approval.

**`Example`**

```ts
"FAM-IND-FST-01"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 12;

#### Defined in

[src/families.scailo_pb.ts:1033](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L1033)

___

### familyType

• `Optional` **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md)

**`Optional`**

**`Description`**

The classification type of the family, dictating its operational lifecycle and valid transaction types (e.g., equipment, feedstock, product). Can be updated only prior to the first approval.

**`Example`**

```ts
"FAMILY_TYPE_COMPONENT"
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid FAMILY_TYPE enum value string or integer.

**`Generated`**

from field: optional Scailo.FAMILY_TYPE family_type = 15;

#### Defined in

[src/families.scailo_pb.ts:1049](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L1049)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/families.scailo_pb.ts:1017](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L1017)

___

### isLeaf

• `Optional` **isLeaf**: `boolean`

**`Optional`**

**`Description`**

A boolean flag indicating whether this family is a leaf node in the hierarchy (i.e., it cannot contain nested sub-families). Can be updated only prior to the first approval.

**`Example`**

```ts
true
```

**`Regex`**

^(?:true|false)$

**`Format`**

Boolean true or false.

**`Generated`**

from field: optional bool is_leaf = 20;

#### Defined in

[src/families.scailo_pb.ts:1081](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L1081)

___

### parentId

• `Optional` **parentId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the parent family. A value of 0 indicates this is a top-level root family. Can be updated only prior to the first approval.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Unsigned 64-bit integer greater than or equal to 0.

**`Generated`**

from field: optional uint64 parent_id = 19;

#### Defined in

[src/families.scailo_pb.ts:1065](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L1065)

___

### userComment

• `Optional` **userComment**: `string`

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

from field: optional string user_comment = 1;

#### Defined in

[src/families.scailo_pb.ts:1001](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L1001)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:1090](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L1090)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:1088](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L1088)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceUpdateIdentityRequest"``

#### Defined in

[src/families.scailo_pb.ts:1089](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L1089)

## Methods

### clone

▸ **clone**(): [`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

Create a deep copy.

#### Returns

[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md) \| `PlainMessage`\<[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)\>

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
| `a` | `undefined` \| [`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md) \| `PlainMessage`\<[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)\> |
| `b` | `undefined` \| [`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md) \| `PlainMessage`\<[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:1111](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L1111)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

#### Defined in

[src/families.scailo_pb.ts:1099](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L1099)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

#### Defined in

[src/families.scailo_pb.ts:1103](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L1103)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

#### Defined in

[src/families.scailo_pb.ts:1107](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/families.scailo_pb.ts#L1107)
