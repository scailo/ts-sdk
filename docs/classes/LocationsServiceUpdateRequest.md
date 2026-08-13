[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LocationsServiceUpdateRequest

# Class: LocationsServiceUpdateRequest

Request message for updating an existing Location record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the name, email, phone and other custom form fields
of an established Location.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.LocationsServiceUpdateRequest

## Hierarchy

- `Message`\<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\>

  ↳ **`LocationsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](LocationsServiceUpdateRequest.md#constructor)

### Properties

- [email](LocationsServiceUpdateRequest.md#email)
- [formData](LocationsServiceUpdateRequest.md#formdata)
- [id](LocationsServiceUpdateRequest.md#id)
- [name](LocationsServiceUpdateRequest.md#name)
- [notifyUsers](LocationsServiceUpdateRequest.md#notifyusers)
- [phone](LocationsServiceUpdateRequest.md#phone)
- [userComment](LocationsServiceUpdateRequest.md#usercomment)
- [fields](LocationsServiceUpdateRequest.md#fields)
- [runtime](LocationsServiceUpdateRequest.md#runtime)
- [typeName](LocationsServiceUpdateRequest.md#typename)

### Methods

- [clone](LocationsServiceUpdateRequest.md#clone)
- [equals](LocationsServiceUpdateRequest.md#equals)
- [fromBinary](LocationsServiceUpdateRequest.md#frombinary)
- [fromJson](LocationsServiceUpdateRequest.md#fromjson)
- [fromJsonString](LocationsServiceUpdateRequest.md#fromjsonstring)
- [getType](LocationsServiceUpdateRequest.md#gettype)
- [toBinary](LocationsServiceUpdateRequest.md#tobinary)
- [toJSON](LocationsServiceUpdateRequest.md#tojson)
- [toJson](LocationsServiceUpdateRequest.md#tojson-1)
- [toJsonString](LocationsServiceUpdateRequest.md#tojsonstring)
- [equals](LocationsServiceUpdateRequest.md#equals-1)
- [fromBinary](LocationsServiceUpdateRequest.md#frombinary-1)
- [fromJson](LocationsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](LocationsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationsServiceUpdateRequest**(`data?`): [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\> |

#### Returns

[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Overrides

Message\&lt;LocationsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/locations.scailo_pb.ts:409](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/locations.scailo_pb.ts#L409)

## Properties

### email

• `Optional` **email**: `string`

**`Optional`**

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

from field: optional string email = 12;

#### Defined in

[src/locations.scailo_pb.ts:377](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/locations.scailo_pb.ts#L377)

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

[src/locations.scailo_pb.ts:407](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/locations.scailo_pb.ts#L407)

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

[src/locations.scailo_pb.ts:333](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/locations.scailo_pb.ts#L333)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or friendly descriptive name of the location.

**`Example`**

```ts
"Headquarters - Building B"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 10;

#### Defined in

[src/locations.scailo_pb.ts:361](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/locations.scailo_pb.ts#L361)

___

### notifyUsers

• `Optional` **notifyUsers**: `boolean`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool notify_users = 3;

#### Defined in

[src/locations.scailo_pb.ts:345](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/locations.scailo_pb.ts#L345)

___

### phone

• `Optional` **phone**: `string`

**`Optional`**

**`Description`**

The primary contact or front desk telephone number for the location, typically including country and area codes.

**`Example`**

```ts
"+1-512-555-0144"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string representing a valid phone number format.

**`Generated`**

from field: optional string phone = 13;

#### Defined in

[src/locations.scailo_pb.ts:393](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/locations.scailo_pb.ts#L393)

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

[src/locations.scailo_pb.ts:317](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/locations.scailo_pb.ts#L317)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/locations.scailo_pb.ts:416](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/locations.scailo_pb.ts#L416)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/locations.scailo_pb.ts:414](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/locations.scailo_pb.ts#L414)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LocationsServiceUpdateRequest"``

#### Defined in

[src/locations.scailo_pb.ts:415](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/locations.scailo_pb.ts#L415)

## Methods

### clone

▸ **clone**(): [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md) \| `PlainMessage`\<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md) \| `PlainMessage`\<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md) \| `PlainMessage`\<[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/locations.scailo_pb.ts:438](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/locations.scailo_pb.ts#L438)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Defined in

[src/locations.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/locations.scailo_pb.ts#L426)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Defined in

[src/locations.scailo_pb.ts:430](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/locations.scailo_pb.ts#L430)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceUpdateRequest`](LocationsServiceUpdateRequest.md)

#### Defined in

[src/locations.scailo_pb.ts:434](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/locations.scailo_pb.ts#L434)
