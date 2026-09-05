[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ComponentsServiceUpdateRequest

# Class: ComponentsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.ComponentsServiceUpdateRequest

## Hierarchy

- `Message`\<[`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md)\>

  ↳ **`ComponentsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ComponentsServiceUpdateRequest.md#constructor)

### Properties

- [description](ComponentsServiceUpdateRequest.md#description)
- [formData](ComponentsServiceUpdateRequest.md#formdata)
- [id](ComponentsServiceUpdateRequest.md#id)
- [internalItemCode](ComponentsServiceUpdateRequest.md#internalitemcode)
- [isQcReportPublic](ComponentsServiceUpdateRequest.md#isqcreportpublic)
- [notifyUsers](ComponentsServiceUpdateRequest.md#notifyusers)
- [remainingDimensions](ComponentsServiceUpdateRequest.md#remainingdimensions)
- [secondaryQuantity](ComponentsServiceUpdateRequest.md#secondaryquantity)
- [secondaryUomId](ComponentsServiceUpdateRequest.md#secondaryuomid)
- [shelfLifeTimestamp](ComponentsServiceUpdateRequest.md#shelflifetimestamp)
- [storageId](ComponentsServiceUpdateRequest.md#storageid)
- [userComment](ComponentsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](ComponentsServiceUpdateRequest.md#vaultfolderid)
- [warrantyTimestamp](ComponentsServiceUpdateRequest.md#warrantytimestamp)
- [fields](ComponentsServiceUpdateRequest.md#fields)
- [runtime](ComponentsServiceUpdateRequest.md#runtime)
- [typeName](ComponentsServiceUpdateRequest.md#typename)

### Methods

- [clone](ComponentsServiceUpdateRequest.md#clone)
- [equals](ComponentsServiceUpdateRequest.md#equals)
- [fromBinary](ComponentsServiceUpdateRequest.md#frombinary)
- [fromJson](ComponentsServiceUpdateRequest.md#fromjson)
- [fromJsonString](ComponentsServiceUpdateRequest.md#fromjsonstring)
- [getType](ComponentsServiceUpdateRequest.md#gettype)
- [toBinary](ComponentsServiceUpdateRequest.md#tobinary)
- [toJSON](ComponentsServiceUpdateRequest.md#tojson)
- [toJson](ComponentsServiceUpdateRequest.md#tojson-1)
- [toJsonString](ComponentsServiceUpdateRequest.md#tojsonstring)
- [equals](ComponentsServiceUpdateRequest.md#equals-1)
- [fromBinary](ComponentsServiceUpdateRequest.md#frombinary-1)
- [fromJson](ComponentsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ComponentsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ComponentsServiceUpdateRequest**(`data?`): [`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md)\> |

#### Returns

[`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md)

#### Overrides

Message\&lt;ComponentsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/components.scailo_pb.ts:384](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L384)

## Properties

### description

• **description**: `string` = `""`

The description of the component

**`Generated`**

from field: string description = 60;

#### Defined in

[src/components.scailo_pb.ts:368](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L368)

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

[src/components.scailo_pb.ts:382](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L382)

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

[src/components.scailo_pb.ts:286](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L286)

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

[src/components.scailo_pb.ts:312](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L312)

___

### isQcReportPublic

• **isQcReportPublic**: `boolean` = `false`

Stores if the associated QC report should be public

**`Generated`**

from field: bool is_qc_report_public = 52;

#### Defined in

[src/components.scailo_pb.ts:354](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L354)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/components.scailo_pb.ts:298](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L298)

___

### remainingDimensions

• **remainingDimensions**: `string` = `""`

Stores any applicable remaining dimensions as a string

**`Generated`**

from field: string remaining_dimensions = 55;

#### Defined in

[src/components.scailo_pb.ts:361](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L361)

___

### secondaryQuantity

• **secondaryQuantity**: `bigint` = `protoInt64.zero`

Stores an optional quantity in the secondary unit of component

**`Generated`**

from field: uint64 secondary_quantity = 39;

#### Defined in

[src/components.scailo_pb.ts:326](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L326)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of component

**`Generated`**

from field: uint64 secondary_uom_id = 38;

#### Defined in

[src/components.scailo_pb.ts:319](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L319)

___

### shelfLifeTimestamp

• **shelfLifeTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional shelf life as a timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp = 40;

#### Defined in

[src/components.scailo_pb.ts:333](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L333)

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the component is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

[src/components.scailo_pb.ts:347](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L347)

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

from field: string user_comment = 1;

#### Defined in

[src/components.scailo_pb.ts:270](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L270)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 18;

#### Defined in

[src/components.scailo_pb.ts:305](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L305)

___

### warrantyTimestamp

• **warrantyTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional warranty as a timestamp

**`Generated`**

from field: uint64 warranty_timestamp = 41;

#### Defined in

[src/components.scailo_pb.ts:340](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L340)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/components.scailo_pb.ts:391](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L391)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/components.scailo_pb.ts:389](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L389)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ComponentsServiceUpdateRequest"``

#### Defined in

[src/components.scailo_pb.ts:390](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L390)

## Methods

### clone

▸ **clone**(): [`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md) \| `PlainMessage`\<[`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md) \| `PlainMessage`\<[`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md) \| `PlainMessage`\<[`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/components.scailo_pb.ts:420](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L420)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md)

#### Defined in

[src/components.scailo_pb.ts:408](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L408)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md)

#### Defined in

[src/components.scailo_pb.ts:412](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L412)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsServiceUpdateRequest`](ComponentsServiceUpdateRequest.md)

#### Defined in

[src/components.scailo_pb.ts:416](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/components.scailo_pb.ts#L416)
