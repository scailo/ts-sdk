[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LocationsServiceCreateRequest

# Class: LocationsServiceCreateRequest

Describes the parameters necessary to create a record

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

[src/locations.scailo_pb.ts:181](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L181)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the location is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/locations.scailo_pb.ts:144](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L144)

___

### email

• **email**: `string` = `""`

The primary email of the location

**`Generated`**

from field: string email = 12;

#### Defined in

[src/locations.scailo_pb.ts:151](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L151)

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

[src/locations.scailo_pb.ts:123](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L123)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/locations.scailo_pb.ts:179](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L179)

___

### isLeaf

• **isLeaf**: `boolean` = `false`

Stores if this is a leaf location or a non-leaf location

**`Generated`**

from field: bool is_leaf = 15;

#### Defined in

[src/locations.scailo_pb.ts:172](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L172)

___

### name

• **name**: `string` = `""`

The name of the location

**`Generated`**

from field: string name = 10;

#### Defined in

[src/locations.scailo_pb.ts:137](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L137)

___

### parentLocationId

• **parentLocationId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent location (0, if the first location that is being created is a leaf location)

**`Generated`**

from field: uint64 parent_location_id = 14;

#### Defined in

[src/locations.scailo_pb.ts:165](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L165)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the location

**`Generated`**

from field: string phone = 13;

#### Defined in

[src/locations.scailo_pb.ts:158](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L158)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/locations.scailo_pb.ts:130](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L130)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/locations.scailo_pb.ts:188](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L188)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/locations.scailo_pb.ts:186](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L186)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LocationsServiceCreateRequest"``

#### Defined in

[src/locations.scailo_pb.ts:187](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L187)

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

[src/locations.scailo_pb.ts:212](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L212)

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

[src/locations.scailo_pb.ts:200](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L200)

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

[src/locations.scailo_pb.ts:204](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L204)

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

[src/locations.scailo_pb.ts:208](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L208)
