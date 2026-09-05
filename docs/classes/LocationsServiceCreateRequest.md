[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LocationsServiceCreateRequest

# Class: LocationsServiceCreateRequest

Request message for creating and registering a new geographic or logical Location.
This record tracks physical operational sites, facility hierarchies (leaf vs. non-leaf parent nodes),
primary contact endpoints, and tenant isolation parameters.

**Note:** This is the primary entry point for Operations, Facilities Management, and Admins to
construct corporate site maps, log logistics hubs, or declare regional branch offices.

**`Generated`**

from message Scailo.LocationsServiceCreateRequest

## Hierarchy

- `Message`\<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\>

  ↳ **`LocationsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](LocationsServiceCreateRequest.md#constructor)

### Properties

- [code](LocationsServiceCreateRequest.md#code)
- [email](LocationsServiceCreateRequest.md#email)
- [entityUuid](LocationsServiceCreateRequest.md#entityuuid)
- [formData](LocationsServiceCreateRequest.md#formdata)
- [isLeaf](LocationsServiceCreateRequest.md#isleaf)
- [name](LocationsServiceCreateRequest.md#name)
- [parentLocationId](LocationsServiceCreateRequest.md#parentlocationid)
- [phone](LocationsServiceCreateRequest.md#phone)
- [userComment](LocationsServiceCreateRequest.md#usercomment)
- [fields](LocationsServiceCreateRequest.md#fields)
- [runtime](LocationsServiceCreateRequest.md#runtime)
- [typeName](LocationsServiceCreateRequest.md#typename)

### Methods

- [clone](LocationsServiceCreateRequest.md#clone)
- [equals](LocationsServiceCreateRequest.md#equals)
- [fromBinary](LocationsServiceCreateRequest.md#frombinary)
- [fromJson](LocationsServiceCreateRequest.md#fromjson)
- [fromJsonString](LocationsServiceCreateRequest.md#fromjsonstring)
- [getType](LocationsServiceCreateRequest.md#gettype)
- [toBinary](LocationsServiceCreateRequest.md#tobinary)
- [toJSON](LocationsServiceCreateRequest.md#tojson)
- [toJson](LocationsServiceCreateRequest.md#tojson-1)
- [toJsonString](LocationsServiceCreateRequest.md#tojsonstring)
- [equals](LocationsServiceCreateRequest.md#equals-1)
- [fromBinary](LocationsServiceCreateRequest.md#frombinary-1)
- [fromJson](LocationsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](LocationsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationsServiceCreateRequest**(`data?`): [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\> |

#### Returns

[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Overrides

Message\&lt;LocationsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/locations.scailo_pb.ts:254](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L254)

## Properties

### code

• **code**: `string` = `""`

**`Mandatory`**

**`Description`**

The unique code or internal alphanumeric token used to classify the location for shipping, logistics, or tagging.

**`Example`**

```ts
"LOC-HQ-BLDGB"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string code = 11;

#### Defined in

[src/locations.scailo_pb.ts:176](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L176)

___

### email

• **email**: `string` = `""`

**`Mandatory`**

**`Description`**

The primary communication or support email address linked specifically to this location.

**`Example`**

```ts
"facilities.loc1@acme.com"
```

**`Regex`**

^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

**`Format`**

Must be a valid and structurally sound email address format.

**`Generated`**

from field: string email = 12;

#### Defined in

[src/locations.scailo_pb.ts:192](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L192)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 1;

#### Defined in

[src/locations.scailo_pb.ts:128](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L128)

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

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/locations.scailo_pb.ts:252](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L252)

___

### isLeaf

• **isLeaf**: `boolean` = `false`

**`Mandatory`**

**`Description`**

Flag determining whether this location is a terminal 'leaf' node (e.g., a specific office room) or a 'non-leaf' grouping node (e.g., an entire region or campus).

**`Example`**

```ts
true
```

**`Format`**

Boolean value (`true` or `false`).

**`Generated`**

from field: bool is_leaf = 15;

#### Defined in

[src/locations.scailo_pb.ts:238](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L238)

___

### name

• **name**: `string` = `""`

**`Mandatory`**

**`Description`**

The official or friendly descriptive name of the location.

**`Example`**

```ts
"Headquarters - Building B"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string name = 10;

#### Defined in

[src/locations.scailo_pb.ts:160](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L160)

___

### parentLocationId

• `Optional` **parentLocationId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the parent non-leaf location. Defaults to 0 if this is the root or top-level node in the geographic hierarchy.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 parent_location_id = 14;

#### Defined in

[src/locations.scailo_pb.ts:224](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L224)

___

### phone

• **phone**: `string` = `""`

**`Mandatory`**

**`Description`**

The primary contact or front desk telephone number for the location, typically including country and area codes.

**`Example`**

```ts
"+1-512-555-0144"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string representing a valid phone number format.

**`Generated`**

from field: string phone = 13;

#### Defined in

[src/locations.scailo_pb.ts:208](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L208)

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

from field: optional string user_comment = 2;

#### Defined in

[src/locations.scailo_pb.ts:144](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L144)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/locations.scailo_pb.ts:261](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L261)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/locations.scailo_pb.ts:259](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L259)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LocationsServiceCreateRequest"``

#### Defined in

[src/locations.scailo_pb.ts:260](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L260)

## Methods

### clone

▸ **clone**(): [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md) \| `PlainMessage`\<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md) \| `PlainMessage`\<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md) \| `PlainMessage`\<[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/locations.scailo_pb.ts:285](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L285)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Defined in

[src/locations.scailo_pb.ts:273](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L273)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Defined in

[src/locations.scailo_pb.ts:277](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L277)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceCreateRequest`](LocationsServiceCreateRequest.md)

#### Defined in

[src/locations.scailo_pb.ts:281](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L281)
